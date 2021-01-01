"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = exports.MySql = void 0;
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
exports.MySql = MySql;
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
exports.MongoDB = MongoDB;
//# sourceMappingURL=db.js.map