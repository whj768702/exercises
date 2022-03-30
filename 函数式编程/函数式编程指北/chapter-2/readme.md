### 函数一等公民

和其他对象一样，可以当参数传递给函数；赋值给变量；存在数组里等等。

```js
// 太傻了
const getServerStuff = (callback) => ajaxCall((json) => callback(json));

// 这才像样
const getServerStuff = ajaxCall;
```

垃圾写法

```js
const BlogController = {
  index(posts) {
    return Views.index(posts);
  },
  show(post) {
    return Views.show(post);
  },
  create(attrs) {
    return Db.create(attrs);
  },
  update(post, attrs) {
    return Db.update(post, attrs);
  },
  destroy(post) {
    return Db.destroy(post);
  },
};
```

重写

```js
const BlogController = {
  index: Views.index,
  show: Views.show,
  create: Db.create,
  update: Db.update,
  destroy: Db.destroy,
};
```
