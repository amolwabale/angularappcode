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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var BasicService = /** @class */ (function () {
    function BasicService(http) {
        this.http = http;
    }
    BasicService.prototype.GetUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users').map(function (result) { return result.json(); });
    };
    BasicService.prototype.GetTodosPerId = function (Id) {
        return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + Id).map(function (result) { return result.json(); });
    };
    BasicService.prototype.SaveData = function (todo) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(todo);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('https://jsonplaceholder.typicode.com/todos', body, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch();
    };
    BasicService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BasicService);
    return BasicService;
}());
exports.BasicService = BasicService;
//# sourceMappingURL=Basic.service.js.map