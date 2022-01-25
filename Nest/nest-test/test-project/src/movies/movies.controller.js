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
exports.MoviesController = void 0;
var common_1 = require("@nestjs/common");
var MoviesController = /** @class */ (function () {
    function MoviesController(movieService) {
        this.movieService = movieService;
    }
    MoviesController.prototype.getAll = function () {
        return this.movieService.getAll();
    };
    MoviesController.prototype.getOne = function (movieID) {
        return this.movieService.getOne(movieID);
    };
    MoviesController.prototype.create = function (movieData) {
        console.log('test');
        return this.movieService.create(movieData);
    };
    MoviesController.prototype.remove = function (movieID) {
        return this.movieService.deleteOne(movieID);
    };
    MoviesController.prototype.patch = function (movieID, UpdateData) {
        return this.movieService.update(movieID, UpdateData);
    };
    __decorate([
        (0, common_1.Get)()
    ], MoviesController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], MoviesController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], MoviesController.prototype, "create");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], MoviesController.prototype, "remove");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], MoviesController.prototype, "patch");
    MoviesController = __decorate([
        (0, common_1.Controller)('movies')
    ], MoviesController);
    return MoviesController;
}());
exports.MoviesController = MoviesController;
