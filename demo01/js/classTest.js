"use strict";
//es5中写法
function Person() {
    this.name="xiejl"; //属性
    this.age=18;
    //方法,实例方法
    this.run=function() {
        console.log(this.name+"执行");
    }
} 

var p = new Person();
console.log(p.name)
p.run()
//原型链中增加方法和属性,原型链上的属性会被多个实例共享,构造函数不会.
Person.prototype.sex = "男"
Person.prototype.go = function() {
    console.log("run go")
}
console.log(p.sex);
p.go();
//静态方法
Person.getInfo = function() {
    console.log("静态方法");
}
//调用静态方法
Person.getInfo();

//继承

//对象冒充实现继承
//对象冒充可以继承构造函数里的方法和属性.但是没有继承原型链的属性和方法
function Son() {
    Person.call(this);
}
var s = new Son();
s.run();


//原型链实现继承
// 可以继承构造函数里的属性和方法 也可以继承原型链中的属性和方法
//但是子类没法给父类传参.
function Son1() {
}
Son1.prototype = new Person();
var s1 = new Son1();
s1.run();
s1.go();

//新的定义一个类,来进行原型链+对象冒充来进行实现继承.
function Person1(name, age) {
    this.name = name;
    this.age = age;
    this.run = function() {
        console.log(this.name+"操作");
    }
}
Person1.prototype.info = function(x) {
    console.log(x)
}