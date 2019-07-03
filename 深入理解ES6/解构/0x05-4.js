function setCookie(name, value, { secure, path, domain, expires }) {}
// setCookie('type', 'js'); // 报错
setCookie('type', 'js', {});

// 或者
// function setCookie(name, value, {
// secure = false,
// path = "/",
// domain = "example.com",
// expires = new Date(Date.now() + 360000000)} = {}) {}