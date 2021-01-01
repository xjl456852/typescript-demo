import {MySql} from "../js/modules/db";
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
var userConnect = new MySql<User>()
//暴露可以有两种方式
//方式一: 原封不动的把import的东西,再暴露出去.
// export {User, MySql}
//方式二:暴露其它服务,这个跟技术没什么关系,属于重构方式.
export {User, userConnect}