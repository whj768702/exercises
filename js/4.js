// 计算三角形面积
// 默认a>b>c
// 海伦公式
// p = (a+b+c)/2
// S = p(p-a)(p-b)(p-c)的开方

function triangleArea(a, b, c) {
    let halfPerimeter = (a + b + c) / 2;
    return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
}
console.log(triangleArea(5, 4, 3));