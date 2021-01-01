"use strict";
//装饰器写法类似于java中的注解,可以给class,method,参数,属性上使用.
//装饰器的目标执行体是一个函数.函数中可以接收class的对象本身引用.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
//1.1 类装饰器:普通装饰器（无法传参）
//对象new出来是装饰器所在的方法就会执行
//无参数时,target是class的引用
function logClass(target) {
    //动态给类中增加一个属性.
    target.prototype.url = "http://baidu.com";
}
var Info = /** @class */ (function () {
    function Info() {
    }
    Info.prototype.getData = function () {
    };
    Info = __decorate([
        logClass
    ], Info);
    return Info;
}());
//这里必须用any类型,否则ts会报错,提示url找不到
var info = new Info();
console.log(info.url);
//1.2 类装饰器:装饰器工厂（可传参）
//有参数时,参数就是实际的参数
function logClassParam(param, info) {
    //在内部接收class对象的引用
    return function (target) {
        target.prototype.url = param;
        target.prototype.age = info;
    };
}
var InfoParam = /** @class */ (function () {
    function InfoParam() {
    }
    InfoParam.prototype.getData = function () {
    };
    InfoParam = __decorate([
        logClassParam("http://xiejl.com", 12)
    ], InfoParam);
    return InfoParam;
}());
//这里必须用any类型,否则ts会报错,提示url找不到
var infoParam = new InfoParam();
console.log(infoParam.url);
console.log(infoParam.age);
/*
1.类装饰器

下面是一个重载构造函数的例子。
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
类装饰器不仅可以修改属性值,还可以增加属性值.
但是必须包含父类属性.
*/
function logClassClass(target) {
    //在内部接收class对象的引用
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 23;
            _this.nameDec = "修改后";
            return _this;
        }
        class_1.prototype.getData = function () {
            this.nameDec = this.nameDec + "adsf";
            console.log(this.nameDec);
        };
        return class_1;
    }(target));
}
var InfoClass = /** @class */ (function () {
    function InfoClass() {
        this.name = "修改前数据";
    }
    InfoClass.prototype.getData = function () {
        console.log(this.name);
    };
    InfoClass = __decorate([
        logClassClass
    ], InfoClass);
    return InfoClass;
}());
//这里必须用any类型,否则ts会报错,提示url找不到
var infoClass = new InfoClass();
console.log(infoClass.nameDec);
console.log(infoClass.name);
infoClass.getData();
/*
2.属性装饰器

属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2、成员的名字。
*/
//参数
//属性装饰器,如果原属性,已经初始化过值,无论是构造器赋值还是初始化时赋值,属性装饰器赋值都会无效.
function logProperty(params) {
    //在内部接收class对象的引用,第二个参数为属性名变量
    return function (target, propertyName) {
        console.log(params);
        console.log(target);
        console.log(propertyName);
        target[propertyName] = params;
    };
}
var InfoProperty = /** @class */ (function () {
    // name:string | undefined = "abc;
    function InfoProperty() {
        //如果这里初始化name的值,那么下面打印name的属性,将会是这个构造函数赋值的值,不是装饰器赋值的值.
        // this.name = "修改前数据"
    }
    InfoProperty.prototype.getData = function () {
        console.log(this.name);
    };
    __decorate([
        logProperty("xiejl is very clever")
    ], InfoProperty.prototype, "name", void 0);
    return InfoProperty;
}());
var infoProperty = new InfoProperty();
console.log("logProperty 属性装饰器---");
console.log(infoProperty.name);
infoProperty.getData();
/*
3.方法装饰器
它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

方法装饰会在运行时传入下列3个参数：
    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2、成员的名字。
    3、成员的属性描述符。
*/
console.log("方法装饰器------");
//测试方法装饰器,并修改方法,也可以同步执行原方法.
//通过方法装饰器:将方法所有的参数都变为string类型,并增加新的属性和新的方法.
function logMethod(param) {
    return function (target, methodName, methodDesc) {
        console.log(target);
        console.log(methodName);
        console.log(methodDesc);
        //新增属性
        target.url = "abc.com";
        //新增方法
        target.run = function () {
            console.log("add new method run");
        };
        //获取原方法体
        var value = methodDesc.value;
        //修改方法
        methodDesc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("执行修改的方法");
            args = args.map(function (value) {
                return String(value);
            });
            console.log("修改参数为字符串类型:" + args);
            // 调用原方法
            value.apply(this, args);
        };
    };
}
var DecoratorMethod = /** @class */ (function () {
    function DecoratorMethod() {
    }
    DecoratorMethod.prototype.getData = function (info, age) {
        console.log("method info :" + info);
        console.log("method age:" + age);
    };
    __decorate([
        logMethod("method decorator abc")
    ], DecoratorMethod.prototype, "getData", null);
    return DecoratorMethod;
}());
var dm = new DecoratorMethod();
dm.getData(12, "234");
//方法参数装饰器
/*
4、方法参数装饰器
参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

            1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
            2、参数的名字。
            3、参数在函数参数列表中的索引。
*/
console.log("方法参数装饰器--------");
function logMethodParam(param) {
    return function (target, methodName, methodParamIndex) {
        console.log("进入方法参数装饰器");
        console.log(target);
        console.log(methodName);
        console.log(methodParamIndex);
        //增加一个属性
        target.url = "baidu.com";
    };
}
var MethodParam = /** @class */ (function () {
    function MethodParam() {
    }
    MethodParam.prototype.getData = function (info, age) {
        console.log("原方法执行");
        console.log(info);
        console.log(age);
    };
    __decorate([
        __param(0, logMethodParam("abc"))
    ], MethodParam.prototype, "getData", null);
    return MethodParam;
}());
var mp = new MethodParam();
mp.getData(12, 345);
console.log(mp.url);
console.log("装饰器执行顺序------");
//装饰器执行顺序
function logClassOrder1(param) {
    console.log("--logClassOrder1");
    return function (target) {
        console.log("logClassOrder1 run");
    };
}
function logClassOrder2(param) {
    console.log("--logClassOrder2");
    return function (target) {
        console.log("logClassOrder2 run");
    };
}
function logPropertyOrder1(param) {
    console.log("--logPropertyOrder1");
    return function (target, propertyName) {
        console.log("logPropertyOrder1 run");
    };
}
function logMethodOrder1(param) {
    console.log("--logMethodOrder1");
    return function (target, methodName, methodDesc) {
        console.log("logMethodOrder1 run");
    };
}
function logMethodOrder11(param) {
    console.log("--logMethodOrder11");
    return function (target, methodName, methodDesc) {
        console.log("logMethodOrder11 run");
    };
}
function logMethodOrder2(param) {
    console.log("--logMethodOrder2");
    return function (target, methodName, methodDesc) {
        console.log("logMethodOrder2 run");
    };
}
function logMethodOrder3(param) {
    console.log("--logMethodOrder3");
    return function (target, methodName, methodDesc) {
        console.log("logMethodOrder3 run");
    };
}
function logMethodOrder4(param) {
    console.log("--logMethodOrder4");
    return function (target, methodName, methodDesc) {
        console.log("logMethodOrder4 run");
    };
}
function logMethodParamOrder1(param) {
    console.log("--logMethodParamOrder1");
    return function (target, methodName, methodParamIndex) {
        console.log("logMethodParamOrder1 run");
    };
}
function logMethodParamOrder2(param) {
    console.log("--logMethodParamOrder2");
    return function (target, methodName, methodParamIndex) {
        console.log("logMethodParamOrder2 run");
    };
}
function logMethodParamOrder3(param) {
    console.log("--logMethodParamOrder3");
    return function (target, methodName, methodParamIndex) {
        console.log("logMethodParamOrder3 run");
    };
}
var RunOrder = /** @class */ (function () {
    function RunOrder() {
    }
    RunOrder.prototype.processGet3 = function (info) {
    };
    RunOrder.prototype.processGet = function () {
    };
    RunOrder.prototype.processInfo = function (info, age) {
        console.log("原方法");
    };
    RunOrder.prototype.processGet2 = function () {
    };
    __decorate([
        logMethodOrder4("abc"),
        __param(0, logMethodParamOrder3("abc"))
    ], RunOrder.prototype, "processGet3", null);
    __decorate([
        logPropertyOrder1("abc")
    ], RunOrder.prototype, "name", void 0);
    __decorate([
        logMethodOrder2("abc")
    ], RunOrder.prototype, "processGet", null);
    __decorate([
        logMethodOrder1("abc"),
        logMethodOrder11("abc"),
        __param(0, logMethodParamOrder1("abc")), __param(1, logMethodParamOrder2("abc"))
    ], RunOrder.prototype, "processInfo", null);
    __decorate([
        logMethodOrder3("abc")
    ], RunOrder.prototype, "processGet2", null);
    RunOrder = __decorate([
        logClassOrder1("abc"),
        logClassOrder2("abc")
    ], RunOrder);
    return RunOrder;
}());
var ro = new RunOrder();
//装饰器执行顺序:
// 一个类中的装饰器执行顺序:
//按类中成员,由上至下依次执行,一个元素一个元素的执行,元素包含属性和方法. 执行完一个元素,才会由上往下进入另一个元素.
// 一个元素中如果有多个装饰器,则会由上往下,从左至右,进行装饰器表达式求值.
// 再进入到装饰器中的返回方法,依次按逆顺序从右至左,从下至上执行.
//就相当于函数的嵌套一样.
//最后再执行类装饰器,类装饰器表达式也是从上至下,再对装饰器中的函数由下往上执行.
//上面的装饰器执行结果:
/*
装饰器执行顺序------
--logMethodOrder4
--logMethodParamOrder3
logMethodParamOrder3 run
logMethodOrder4 run
--logPropertyOrder1
logPropertyOrder1 run
--logMethodOrder2
logMethodOrder2 run
--logMethodOrder1
--logMethodOrder11
--logMethodParamOrder1
--logMethodParamOrder2
logMethodParamOrder2 run
logMethodParamOrder1 run
logMethodOrder11 run
logMethodOrder1 run
--logMethodOrder3
logMethodOrder3 run
--logClassOrder1
--logClassOrder2
logClassOrder2 run
logClassOrder1 run

*/
//# sourceMappingURL=index-decorator.js.map