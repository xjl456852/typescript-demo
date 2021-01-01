console.log("hello 哈哈") 
let str:string = "asdfa";

let nu:number = 12.54
let nu1:number = 13
let b:boolean = true;
let arr1:number[] = [1,3,4,5];
let arr2:Array<string> = ["123","ad"];
let arr3:any[] = [12,"ds",true];
let tuple1:[string,number,boolean] = ["32",12,true];
enum Color {red, white, blue};
// enum Info {a,b=10,c};
// enum Info {a=0,b=10,c=11};

console.log(nu);
console.log(nu1);
console.log(b);
console.log(arr1);
console.log(arr2[1]);
console.log(tuple1[0]);
console.log(Color.blue);
// console.log(Info.c);

let any1:any = "abc"
any1 = 123;

//null是一个只有一个值的特殊类型。表示一个空对象引用。用 typeof 检测 null 返回是object。

//typeof 一个没有值的变量会返回 undefined

//null 和 undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined。

//变量定义没有赋值,就是undefined
var num1:number ;
// console.log(num1)  //输出：undefined,当前行会提示错误,但是可以编译.

//定义为undefined之后不能赋值为其它类型.
var num2:undefined;
num2=undefined //只能等于undefined,或者不赋值
console.log(num2) //输出：undefined,当前行不报错.

//定义多种类型数据 let/var 变量名:类型1|类型2|..
var num3:number|undefined;
num3=12
console.log(num3)

//变量可以为null
var nullTest:null
nullTest=null
console.log(nullTest)

// void类型: typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
//没有返回值
function run():void{

    console.log('run')
}

run();


//错误写法,没有返回值不能定义为undefined
/*
    function run():undefined{

        console.log('run')
    }

    run();

*/

//正确写法,其它返回值
/*
function run():number{

    return 123;
}

run();
*/

//  never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）。。
//这意味着声明never的变量只能被never类型所赋值。
//  https://www.cnblogs.com/yintian908/p/11157408.html

let x: never;
let y: number;
// 运行错误，数字类型不能转为 never 类型
// x = 123;

// 运行正确，never 类型可以赋值给 never类型
// x = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
// y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
