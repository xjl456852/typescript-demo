
//原封不动的在User.ts中暴露了MySql
/*
import {User,MySql} from "./modules/User";

var mySql= new MySql<User>();
mySql.add(new User("xiejl", 10, "abc"))
*/

//方式二暴露
import {User, userConnect} from "./modules/User";

userConnect.add(new User("xiejianglei", 14, "xjl"))

import {Address, addressMySql} from "./modules/Address";
addressMySql.add(new Address("hh", 22, "dds"))