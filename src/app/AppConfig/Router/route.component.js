"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("../../Views/Home/home.component");
var todo_component_1 = require("../../Views/TodoDetails/todo.component");
exports.routes = [
    { path: 'TodoDetails/:id', component: todo_component_1.TodoComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.Routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=route.component.js.map