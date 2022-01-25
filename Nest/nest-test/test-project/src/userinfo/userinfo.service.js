"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserinfoService = void 0;
var common_1 = require("@nestjs/common");
var UserinfoService = /** @class */ (function () {
    function UserinfoService() {
        this.userinfos = [];
    }
    UserinfoService.prototype.getAll = function () {
        return this.userinfos;
    };
    UserinfoService.prototype.getOne = function (id) {
        var userinfo = this.userinfos.find(function (userinfo) { return userinfo.userid === id; });
        if (!userinfo) {
            throw new common_1.NotFoundException("Userinfo with Key : ".concat(id, " not found"));
        }
        return userinfo;
    };
    UserinfoService.prototype.deleteOne = function (id) {
        this.getOne(id);
        this.userinfos = this.userinfos.filter(function (userinfo) { return userinfo.userid !== id; });
    };
    UserinfoService.prototype.create = function (userinfodata) {
        this.userinfos.push(__assign({ key: this.userinfos.length + 1 }, userinfodata));
    };
    UserinfoService.prototype.update = function (id, updateData) {
        var userinfo = this.getOne(id);
        this.deleteOne(id);
        this.userinfos.push(__assign(__assign({}, userinfo), updateData));
    };
    UserinfoService = __decorate([
        (0, common_1.Injectable)()
    ], UserinfoService);
    return UserinfoService;
}());
exports.UserinfoService = UserinfoService;
