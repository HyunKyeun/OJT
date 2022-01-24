"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserinfoService = void 0;
const common_1 = require("@nestjs/common");
let UserinfoService = class UserinfoService {
    constructor() {
        this.userinfos = [];
    }
    getAll() {
        return this.userinfos;
    }
    getOne(id) {
        const userinfo = this.userinfos.find((userinfo) => userinfo.userid === id);
        if (!userinfo) {
            throw new common_1.NotFoundException(`Userinfo with Key : ${id} not found`);
        }
        return userinfo;
    }
    deleteOne(id) {
        this.getOne(id);
        this.userinfos = this.userinfos.filter((userinfo) => userinfo.userid !== id);
    }
    create(userinfodata) {
        this.userinfos.push(Object.assign({ key: this.userinfos.length + 1 }, userinfodata));
    }
    update(id, updateData) {
        const userinfo = this.getOne(id);
        this.deleteOne(id);
        this.userinfos.push(Object.assign(Object.assign({}, userinfo), updateData));
    }
};
UserinfoService = __decorate([
    (0, common_1.Injectable)()
], UserinfoService);
exports.UserinfoService = UserinfoService;
//# sourceMappingURL=userinfo.service.js.map