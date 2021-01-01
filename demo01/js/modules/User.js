"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConnect = exports.User = void 0;
var db_1 = require("../js/modules/db");
var User = /** @class */ (function () {
    function User(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    return User;
}());
exports.User = User;
var userConnect = new db_1.MySql();
exports.userConnect = userConnect;
//# sourceMappingURL=User.js.map