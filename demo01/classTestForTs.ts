/* 
1.类的定义
2.抽象类
3.接口的定义
4.泛型
5.模拟定义数据库连接
 */

//定义类
//类中定义方法不能用function关键字.直接写方法名即可.
class Person{
    //属性,前面省去public关键字
    name:string;
    protected age:number;
    //构造函数,实例化对象时触发的方法.
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    run():void {
        console.log(this.name)
    }

    getName():string {
        return this.name;
    }
    setName(name:string):void {
        this.name=name;
    }
}

var p = new Person("xiejl", 10);
p.run();
p.setName("abc")
console.log(p.getName())


//继承
//子类和父类中有相同的方法,如果引用的是子类对象,则优先调用子类方法,与java中一致.
class Son extends Person{
    //不写构造函数,默认继承父类的构造函数.跟java中一样.
    /*  constructor(name:string, age:number) {
        super(name,age);
    }*/
    static info:string="孩子";
    work():void{
        console.log("子类访问protected修饰的对象:"+this.age);
    }
    static eat() {
        console.log("吃");
    }
}
var son = new Son("xiejlabc",10);
son.run()
console.log(son.name)
son.work()
Son.eat();
console.log(Son.info)
//类属性和方法修饰符有三个: public(不加修饰符等于加了public,与java稍有不同.) , protected, private 跟java中的操作方式一样.

//静态方法与静态属性一样,也是前面加static关键字,并且静态资源无法访问动态资源.与java一致.
//重写的方法可以和父类的参数不一样.
//假设父类方法中有多个惨,子类重写可以一个参数都没有,也可以少参数,但是是从末端向前少参数,参数必须是按顺序来的.子类的方法参数名可以和父类的不一样.
//比如父类中方法的定义
/*eat(age:number, a:string):string{
    return "";
}*/
//子类重写方法可以是:
/*eat(a:number ):string {
        console.log("dog");
        return "dog";
    }
    eat():string {
        console.log("dog");
        return "dog";
    }
    eat(a:number, b:string):string {
        console.log("dog");
        return "dog";
    }
    */
// 都是合法的

// 子类重写方法的返回类型需要和父类方法一样.如果父类方法返回类型是any,子类可以返回任意类型
class Animal{
    name:string="";
    eat(age:number, a:string):string{
        return "";
    }
    run(a:string, b:number, c:boolean):any{

    }
}

class Dog extends Animal {
    eat(a:number ):string {
        console.log("dog"+a);
        return "dog";
    }


}
var d = new Dog();
d.eat(12)

//抽象类,与java中的写法基本相同,可以定义抽象方法和非抽象方法.抽象方法必须被实现.同样使用abstract关键字.
console.log("-------abstract class method----------");
abstract class Animal1{
    name: string = "";
    abstract run():void ;
}

class Dog1 extends Animal1 {
    run(): void {
        console.log("dog run")
    }
}
var d1 = new Dog1()
d1.run();

//定义接口
//1.接口对json数据的约束,可以约束json数据格式,要求必须传入什么json格式.
// 参数名必须和接口中定义的参数名一样,参数顺序可以颠倒.直接传入的参数,参数不能多,也不能少.定义非必传参数,仍然可以使用?,比如 name?:string;
//与重写方法的方式有区别.


interface Param{
    name:string;
    age:number;
}

function run4(p:Param) :any{
    console.log(p.name+""+p.age);

}

run4({"name":"abc", "age":10})
// run4({"name":"abc", "age":10,"x":10}) //直接传入参数,参数个数多,这是错误写法
var p1= {"name":"abc", "age":10,"x":10};
run4(p1) //间接传入参数,可以多参数.但不能少参数.多余的参数其实在使用时也不能直接获取到.

//2.使用接口的方式,模拟jquery的ajax的调用.
/*interface Config {
    type:string;
    url:string;
    dataType:string;
    data:string;
    async:boolean;
}


//可以在html中的js中使用.
function ajax(config:Config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,config.async)
    xhr.send(config.data)
    xhr.onreadystatechange=function (){
        if(xhr.readyState==4 && xhr.status == 200) {
            console.log("sucess")
            if(config.dataType== "json") {
                console.log(JSON.parse(xhr.responseText))
            } else {
                console.log(xhr.responseText)
            }
        }
    }
}

ajax({
    type:"get",
    data:"name=zhangsan",
    url:"http://a.itying.com/api/productlist",
    dataType:"json",
    async:true
})*/

//接口 对传入参数和返回类型进行约束
//格式如下
//     (参数名:参数类型:):返回类型
// 比如模拟加密操作
interface encrypt {
    (key:string, value:string):string;
}
//模拟加密,使用接口对参数类型及返回值类型进行约束
var md5:encrypt = function (a:string,b:string):string {
    return a+b;
}

var sha1:encrypt = function (a,b):string{
    return a+" "+b;
}

console.log(md5("1", "2"));
console.log(sha1("1","2"))


//可索引接口,: 数组,对象的约束,对类的约束(就是java中的集成和实现,对子类的约束.这个不写了)
//接口可以跟java中一样,实现多继承,抽象类只能继承一个.

//对数组的约束:索引只能为数字类型,返回值可以是其它类型.
//例如:索引为数字类型,值为字符串类型约束.
interface Arr{
    [index:number]:string;
}
var arr:Arr = ["1","2","3"]

//对 对象进行约束:
interface Obj{
    [index:string]:string
}
var obj:Obj = {"a":"12", "b":"hh"}


//泛型跟java中的泛型类型.
//比如定义一个函数的参数类型和返回类型为同一种类型.
function getDate<T>(value:T):T{
    return value;
}

console.log(getDate<string>("12"));;
console.log(getDate<number>(23));;

//写一个传统方法和泛型方法.做对比
//获取最小值,这个只能获取数字类型
class MinInfo{
    list:number[] = [];
    add(item:number) {
        this.list.push(item);
    }
    getMin() {
        let min:number =this.list[0] ;
        for (let i = 0; i < this.list.length; i++) {
            let temp = this.list[i];
            if(min>temp) {
                min = temp;
            }
        }
        return min;
    }
}

var minInfo = new MinInfo();
minInfo.add(13)
minInfo.add(3)
minInfo.add(5)
minInfo.add(1)
minInfo.add(15)
console.log(minInfo.getMin());

//改写为泛型类型
//获取最小值,这个可以获取数字和字符类型
class MinInfo2<T>{
    list:T[] = [];
    add(item:T) {
        this.list.push(item);
    }
    getMin() {
        let min:T =this.list[0] ;
        for (let i = 0; i < this.list.length; i++) {
            let temp = this.list[i];
            if(min>temp) {
                min = temp;
            }
        }
        return min;
    }
}

var minInfo2 = new MinInfo2<string>();
minInfo2.add("c")
minInfo2.add("a")
minInfo2.add("b")
console.log(minInfo2.getMin());

//泛型可以在定义接口约束时,在方法上指定泛型
interface Config1{
    <T>(vlaue:T):T
}
interface Config2<T>{
    (vlaue:T):T
}
//两种方式进行泛型约束
//方式一
var config1:Config1 = function<T> (s:T):T {
    return s;
}
//方式二
var config2:Config2<string> = function (s:string):string {
    return s;
}
config1("xiejl");
config2("xiejl2")

/*

功能：定义一个操作数据库的库  支持 Mysql Mssql  MongoDb

要求1：Mysql MsSql  MongoDb功能一样  都有 add  update  delete  get方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口 ，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性、

*/

interface DB<T> {
    add(t:T):any;
    updateById(t:T, id:number):number;
    delete(t:T):number;
    get():any;
}

class MySql<T> implements DB<T> {
    add(t: T) {
        console.log("add" + JSON.stringify(t));
    }

    delete(t: T): number {
        console.log("delete"+t)
        return 1;
    }

    get(): any {

        return undefined;
    }

    updateById(t: T, id: number): number {
        console.log("update"+t)
        return 1;
    }
}

class MongoDB<T> implements DB<T> {
    add(t: T): any {
        console.log("mongodb add" + JSON.stringify(t));
    }

    delete(t: T): number {
        return 0;
    }

    get(): any {
    }

    updateById(t: T, id: number): number {
        return 0;
    }

}

class User{
    name:string | undefined;
    age:number | undefined;
    info:string | undefined;

    constructor(name: string | undefined, age: number | undefined, info: string | undefined) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
}

var u = new User("xiejl", 18, "hh");
var sql = new MySql<User>();
sql.add(u)

var mongodb = new MongoDB<User>()
mongodb.add(u)