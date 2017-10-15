import { Component } from '@angular/core';
import { BasicService } from '../../Service/Basic.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'my-app',
    templateUrl: './todo.html',
})
export class TodoComponent {
    Title: any;
    todoId: any;
    todoDetails: any;
    newTodo: any;
    TempTodo: any;


    constructor(private _route: ActivatedRoute, private MyService: BasicService) {

        this.Title = "To Do Details";
        this.newTodo = "";
        
        //Getting User id from route
        this._route.params.forEach(
            (params: Params) => {
                this.todoId = params["id"];
            }
        );
        this.MyService.GetTodosPerId(this.todoId).subscribe(todo => { console.log(todo) });
        this.MyService.GetTodosPerId(this.todoId).subscribe(todo => { this.todoDetails = todo });

        //Setting box in center
        $(document).ready(function () {
            var winHt = $(window).height();
            var top = ((winHt / 2) / 2);
            var divht = (winHt / 2);
            $('#idTableTodoDetails').css({ "height": divht });
            $('#idTableTodoDetails').css({ "top": top-60 });
            $('#idDivBottom').css({ "margin-top": (top + 10) - 60 });
        });
        
    }

    DeleteTodo(index: any) {
        this.todoDetails.splice(index, 1);
    }

    AddTodo() {

        if (this.newTodo == "" || this.newTodo == undefined || this.newTodo == null) {
            alert("Please enter to do.");
            return false;
        }
        this.TempTodo = new Object();
        this.TempTodo.title = this.newTodo;
        this.TempTodo.completed = false;
        var cnt = this.todoDetails[this.todoDetails.length-1].id + 1;
        this.TempTodo.id = cnt;
        this.newTodo = "";
        //this.TempTodo.id = 0;
        this.TempTodo.userId = this.todoId;
        this.todoDetails.push(this.TempTodo);
        this.MyService.SaveData(this.TempTodo);

    }

}