module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '>1%', 'ios 7', 'android 4.1'], // 兼容的浏览和系统
    }),
  ],
};
