"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserinfoController = void 0;
var common_1 = require("@nestjs/common");
var UserinfoController = /** @class */ (function () {
    function UserinfoController(userinfoService) {
        this.userinfoService = userinfoService;
    }
    UserinfoController.prototype.getAll = function () {
        return this.userinfoService.getAll();
    };
    UserinfoController.prototype.getOne = function (ID) {
        return this.userinfoService.getOne(ID);
    };
    UserinfoController.prototype.create = function (Userinfo) {
        return this.userinfoService.create(Userinfo);
    };
    UserinfoController.prototype.remove = function (ID) {
        return this.userinfoService.deleteOne(ID);
    };
    UserinfoController.prototype.patch = function (ID, UpdateData) {
        return this.userinfoService.update(ID, UpdateData);
    };
    __decorate([
        (0, common_1.Get)()
    ], UserinfoController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserinfoController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], UserinfoController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserinfoController.prototype, "remove");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], UserinfoController.prototype, "patch");
    UserinfoController = __decorate([
        (0, common_1.Controller)('userinfo')
    ], UserinfoController);
    return UserinfoController;
}());
exports.UserinfoController = UserinfoController;
