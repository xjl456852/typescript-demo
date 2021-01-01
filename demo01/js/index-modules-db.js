"use strict";
//原封不动的在User.ts中暴露了MySql
/*
import {User,MySql} from "./modules/User";

var mySql= new MySql<User>();
mySql.add(new User("xiejl", 10, "abc"))
*/
Object.defineProperty(exports, "__esModule", { value: true });
//方式二暴露
var User_1 = require("./modules/User");
User_1.userConnect.add(new User_1.User("xiejianglei", 14, "xjl"));
var Address_1 = require("./modules/Address");
Address_1.addressMySql.add(new Address_1.Address("hh", 22, "dds"));
//# sourceMappingURL=index-modules-db.js.map