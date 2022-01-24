"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserinfoDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_userinfo_dto_1 = require("./create-userinfo.dto");
class UpdateUserinfoDTO extends (0, mapped_types_1.PartialType)(create_userinfo_dto_1.CreateUserinfoDTO) {
}
exports.UpdateUserinfoDTO = UpdateUserinfoDTO;
//# sourceMappingURL=update-userinfo.dto.js.map