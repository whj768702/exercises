'use strict';

const babel = require('@babel/core');
const parser = require('@babel/parser');
const t = require('@babel/types');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const LoaderUtils = require('loader-utils');
const { resourceUsage } = require('process');
const schema = require('./test-loader.json');

module.exports = function (content, sourceMap, data) {
  console.log('test loader content: ', content);
  const ast = parser.parse(content);
  // console.log('test loader ast: ', ast);
  traverse(ast, {
    enter(path) {
      if (path.node.type === 'VariableDeclaration') {
        path.node.kind = 'const';
      }
      // if (t.isIdentifier(path.node)) {
      //   console.log('isDeclareVariable: ', t.isIdentifier(path.node));
      //   console.log('test loader path: ', path.node.type);
      // }
    },
  });
  // const options = this.getOptions(); // webpack.config.js中使用该loader时配置的options
  const result = generate(ast, {
    comments: true,
    sourceMaps: true,
    sourceFileName: 'test',
    auxiliaryCommentAfter: 'test loader end',
    shouldPrintComment: (comment) => {
      console.log('comment: ', comment);
      return true;
    },
  });
  return result.code;
};
