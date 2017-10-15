"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var home_component_1 = require("../../Views/Home/home.component");
var todo_component_1 = require("../../Views/TodoDetails/todo.component");
var layout_component_1 = require("../Layout/layout.component");
var Basic_service_1 = require("../../Service/Basic.service");
var route_component_1 = require("../Router/route.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, route_component_1.Routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [home_component_1.HomeComponent, todo_component_1.TodoComponent, layout_component_1.AppLayout],
            bootstrap: [layout_component_1.AppLayout],
            providers: [Basic_service_1.BasicService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map