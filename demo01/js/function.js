"use strict";
//早期定义方法:
/* function run() {

}

var run1=function() {

} */
//es6函数语法
/*
function 方法名():返回类型 {
}
// 匿名函数
var 方法名=function():返回类型 {

}
*/
// 例如
function run1() {
    //
}
//又如
var run2 = function () {
    //
};
//方法传参语法
//参数名后面加? 表示可选,可选参数需要在最后一个参数位置.
//参数有默认值的直接在用=设置默认值,不传参数就用默认值,传入参数就用穿入值.
// ... 参数同样表示数组类型 ...参数名:参数类型[]
// function 方法名(参数名1:参数类型, 参数名2:参数类型, ...):返回类型{
// }
// function 方法名(参数名1:参数类型, 参数名2?:参数类型, 参数名3:参数类型=默认值):返回类型{
// }
// function 方法名(参数名1:参数类型, ...参数名2:参数类型[]):返回类型{
// }
//示例
function run3(a, b, c) {
    if (c === void 0) { c = 10; }
    var d = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        d[_i - 3] = arguments[_i];
    }
}
function run5(a, b) {
    console.log(a + b);
}
run5(1, 1);
run5(1, "32");
//原始js方法
setTimeout(function () {
    console.log("js");
}, 1000);
//ts中的箭头函数
setTimeout(function () {
    console.log("es6");
}, 1000);
//# sourceMappingURL=function.js.map