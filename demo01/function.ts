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
function run1():void {
    //
}
//又如
var run2=function():void {
    //
}

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
function run3(a:number, b?:string, c:number=10, ...d:string[]) {

}
//方法重载,跟java中的重载不一样,区别还挺大,ts中的方法重载有点类似于对函数的参数类型做校验的意思.
// 如果es5中出现了相同方法名的方法,则底下的会覆盖上面的.
// 例如es5的重载方法
/* function run4(info){

}
//在es5中,下面的方法会覆盖上面的方法.
function run4(info,age){

} */

//重载的方法,返回值如果void,重载就不能有其它类型的返回值,如果真正的方法返回值为any,那么重载的方法的返回值也可以为其它number之类的类型.
//定义重载,相当于只是限制了参数类型和返回类型,并没有真正的创造方法.
function run5(a:number, b:number):void;
function run5(a:number, b:string):void;
function run5(a:any, b:any):void{
    console.log(a+b)
}

run5(1,1);
run5(1,"32")

//原始js方法
setTimeout(function() {
    console.log("js")
},1000);

//ts中的箭头函数
setTimeout(() => {
    console.log("es6")
},1000);
