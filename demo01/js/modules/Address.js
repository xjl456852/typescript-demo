"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressMySql = exports.Address = void 0;
var db_1 = require("../js/modules/db");
var Address = /** @class */ (function () {
    function Address(name, age, info) {
        this.name = name;
        this.age = age;
        this.info = info;
    }
    return Address;
}());
exports.Address = Address;
var addressMySql = new db_1.MySql();
exports.addressMySql = addressMySql;
//# sourceMappingURL=Address.js.map