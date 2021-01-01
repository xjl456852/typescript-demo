"use strict";
/*
1.类的定义
2.抽象类
3.接口的定义
4.泛型
5.模拟定义数据库连接
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//定义类
//类中定义方法不能用function关键字.直接写方法名即可.
var Person = /** @class */ (function () {
    //构造函数,实例化对象时触发的方法.
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("xiejl", 10);
p.run();
p.setName("abc");
console.log(p.getName());
//继承
//子类和父类中有相同的方法,如果引用的是子类对象,则优先调用子类方法,与java中一致.
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Son.prototype.work = function () {
        console.log("子类访问protected修饰的对象:" + this.age);
    };
    Son.eat = function () {
        console.log("吃");
    };
    //不写构造函数,默认继承父类的构造函数.跟java中一样.
    /*  constructor(name:string, age:number) {
        super(name,age);
    }*/
    Son.info = "孩子";
    return Son;
}(Person));
var son = new Son("xiejlabc", 10);
son.run();
console.log(son.name);
son.work();
Son.eat();
console.log(Son.info);
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
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "";
    }
    Animal.prototype.eat = function (age, a) {
        return "";
    };
    Animal.prototype.run = function (a, b, c) {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function (a) {
        console.log("dog" + a);
        return "dog";
    };
    return Dog;
}(Animal));
var d = new Dog();
d.eat(12);
//抽象类,与java中的写法基本相同,可以定义抽象方法和非抽象方法.抽象方法必须被实现.同样使用abstract关键字.
console.log("-------abstract class method----------");
var Animal1 = /** @class */ (function () {
    function Animal1() {
        this.name = "";
    }
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.run = function () {
        console.log("dog run");
    };
    return Dog1;
}(Animal1));
var d1 = new Dog1();
d1.run();
function run4(p) {
    console.log(p.name + "" + p.age);
}
run4({ "name": "abc", "age": 10 });
// run4({"name":"abc", "age":10,"x":10}) //直接传入参数,参数个数多,这是错误写法
var p1 = { "name": "abc", "age": 10, "x": 10 };
run4(p1); //间接传入参数,可以多参数.但不能少参数.多余的参数其实在使用时也不能直接获取到.
//模拟加密,使用接口对参数类型及返回值类型进行约束
var md5 = function (a, b) {
    return a + b;
};
var sha1 = function (a, b) {
    return a + " " + b;
};
console.log(md5("1", "2"));
console.log(sha1("1", "2"));
var arr = ["1", "2", "3"];
var obj = { "a": "12", "b": "hh" };
//泛型跟java中的泛型类型.
//比如定义一个函数的参数类型和返回类型为同一种类型.
function getDate(value) {
    return value;
}
console.log(getDate("12"));
;
console.log(getDate(23));
;
//写一个传统方法和泛型方法.做对比
//获取最小值,这个只能获取数字类型
var MinInfo = /** @class */ (function () {
    function MinInfo() {
        this.list = [];
    }
    MinInfo.prototype.add = function (item) {
        this.list.push(item);
    };
    MinInfo.prototype.getMin = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            var temp = this.list[i];
            if (min > temp) {
                min = temp;
            }
        }
        return min;
    };
    return MinInfo;
}());
var minInfo = new MinInfo();
minInfo.add(13);
minInfo.add(3);
minInfo.add(5);
minInfo.add(1);
minInfo.add(15);
console.log(minInfo.getMin());
//改写为泛型类型
//获取最小值,这个可以获取数字和字符类型
var MinInfo2 = /** @class */ (function () {
    function MinInfo2() {
        this.list = [];
    }
    MinInfo2.prototype.add = function (item) {
        this.list.push(item);
    };
    MinInfo2.prototype.getMin = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            var temp = this.list[i];
            if (min > temp) {
                min = temp;
            }
        }
        return min;
    };
    return MinInfo2;
}());
var minInfo2 = new MinInfo2();
minInfo2.add("c");
minInfo2.add("a");
minInfo2.add("b");
console.log(minInfo2.getMin());
//两种方式进行泛型约束
//方式一
var config1 = function (s) {
    return s;
};
//方式二
var config2 = function (s) {
    return s;
};
config1("xiejl");
config2("xiejl2");
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function (t) {
        console.log("add" + JSON.stringify(t));
    };
    MySql.prototype.delete = function (t) {
        console.log("delete" + t);
        return 1;
    };
    MySql.prototype.get = function () {
        return undefined;
    };
    MySql.prototype.updateById = function (t, id) {
        console.log("update" + t);
        return 1;
    };
    return MySql;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function (t) {
        console.log("mongodb add" + JSON.stringify(t));
    };
    MongoDB.prototype.delete = function (t) {
        return 0;
    };
    MongoDB.prototype.get = function () {
    };
    MongoDB.prototype.updateById = function (t, id) {
        return 0;
    };
    return MongoDB;
}());
var User = /** @class */ (function () {
    function User(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    return User;
}());
var u = new User("xiejl", 18, "hh");
var sql = new MySql();
sql.add(u);
var mongodb = new MongoDB();
mongodb.add(u);
//# sourceMappingURL=classTestForTs.js.map