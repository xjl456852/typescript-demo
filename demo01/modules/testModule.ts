export var url = "xiejl.com"

function a(info:string):any {
    console.log("a method called"+info)
    return "a method"
}

function b():any {
    console.log("b method called")
}

export {a,b}
//暴露方法
//引用时 as 别名 写不写都行
//js中有export关键字,需要使用webpack打包,或者直接使用nodejs运行js文件.
//运行: node 文件名.js

//方式一:
//在需要暴露出去的方法和变量的前面加入 export 关键字
//例如: export var url = "xiejl.com";
//export function 方法名 ...
//引用时 import {方法名或变量名1 as 别名, 方法名或变量名1} from './路径', 路径可以不写ts文件名
//方式二:
//在地步进行总体暴露
//export {方法名或变量名,...}
//引用时 import {方法名或变量名1 as 别名, 方法名或变量名1} from './路径'
//方式三:
//当只有一个对象需要暴露时,使用.
//export default 方法名或变量名;
//引用时 import 方法名或变量名 as 别名 from './路径'