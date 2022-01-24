"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserinfoController = void 0;
const common_1 = require("@nestjs/common");
const create_userinfo_dto_1 = require("./dto/create-userinfo.dto");
const update_userinfo_dto_1 = require("./dto/update-userinfo.dto");
const userinfo_service_1 = require("./userinfo.service");
const userinfo_entity_1 = require("./entities/userinfo.entity");
let UserinfoController = class UserinfoController {
    constructor(userinfoService) {
        this.userinfoService = userinfoService;
    }
    getAll() {
        return this.userinfoService.getAll();
    }
    getOne(ID) {
        return this.userinfoService.getOne(ID);
    }
    create(Userinfo) {
        return this.userinfoService.create(Userinfo);
    }
    remove(ID) {
        return this.userinfoService.deleteOne(ID);
    }
    patch(ID, UpdateData) {
        return this.userinfoService.update(ID, UpdateData);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserinfoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", userinfo_entity_1.Info)
], UserinfoController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_userinfo_dto_1.CreateUserinfoDTO]),
    __metadata("design:returntype", void 0)
], UserinfoController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserinfoController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_userinfo_dto_1.UpdateUserinfoDTO]),
    __metadata("design:returntype", void 0)
], UserinfoController.prototype, "patch", null);
UserinfoController = __decorate([
    (0, common_1.Controller)('userinfo'),
    __metadata("design:paramtypes", [userinfo_service_1.UserinfoService])
], UserinfoController);
exports.UserinfoController = UserinfoController;
//# sourceMappingURL=userinfo.controller.js.map