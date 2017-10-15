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
var Basic_service_1 = require("../../Service/Basic.service");
var router_1 = require("@angular/router");
var TodoComponent = /** @class */ (function () {
    function TodoComponent(_route, MyService) {
        var _this = this;
        this._route = _route;
        this.MyService = MyService;
        this.Title = "To Do Details";
        this.newTodo = "";
        //Getting User id from route
        this._route.params.forEach(function (params) {
            _this.todoId = params["id"];
        });
        this.MyService.GetTodosPerId(this.todoId).subscribe(function (todo) { console.log(todo); });
        this.MyService.GetTodosPerId(this.todoId).subscribe(function (todo) { _this.todoDetails = todo; });
        //Setting box in center
        $(document).ready(function () {
            var winHt = $(window).height();
            var top = ((winHt / 2) / 2);
            var divht = (winHt / 2);
            $('#idTableTodoDetails').css({ "height": divht });
            $('#idTableTodoDetails').css({ "top": top - 60 });
            $('#idDivBottom').css({ "margin-top": (top + 10) - 60 });
        });
    }
    TodoComponent.prototype.DeleteTodo = function (index) {
        this.todoDetails.splice(index, 1);
    };
    TodoComponent.prototype.AddTodo = function () {
        if (this.newTodo == "" || this.newTodo == undefined || this.newTodo == null) {
            alert("Please enter to do.");
            return false;
        }
        this.TempTodo = new Object();
        this.TempTodo.title = this.newTodo;
        this.TempTodo.completed = false;
        var cnt = this.todoDetails[this.todoDetails.length - 1].id + 1;
        this.TempTodo.id = cnt;
        this.newTodo = "";
        //this.TempTodo.id = 0;
        this.TempTodo.userId = this.todoId;
        this.todoDetails.push(this.TempTodo);
        this.MyService.SaveData(this.TempTodo);
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './todo.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, Basic_service_1.BasicService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map