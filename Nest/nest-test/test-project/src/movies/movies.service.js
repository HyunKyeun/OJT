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
exports.MoviesService = void 0;
var common_1 = require("@nestjs/common");
var MoviesService = /** @class */ (function () {
    function MoviesService() {
        this.movies = [];
    }
    MoviesService.prototype.getAll = function () {
        return this.movies;
    };
    MoviesService.prototype.getOne = function (id) {
        var movie = this.movies.find(function (movie) { return movie.id === +id; });
        if (!movie) {
            throw new common_1.NotFoundException("Movie with ID : ".concat(id, " not found."));
        }
        return movie;
    };
    MoviesService.prototype.deleteOne = function (id) {
        this.getOne(id);
        this.movies = this.movies.filter(function (movie) { return movie.id !== id; });
    };
    MoviesService.prototype.create = function (movieData) {
        this.movies.push(__assign({ id: this.movies.length + 1 }, movieData));
    };
    MoviesService.prototype.update = function (id, updateData) {
        var movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push(__assign(__assign({}, movie), updateData));
    };
    MoviesService = __decorate([
        (0, common_1.Injectable)()
    ], MoviesService);
    return MoviesService;
}());
exports.MoviesService = MoviesService;
