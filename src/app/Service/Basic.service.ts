import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

declare var jquery: any;
declare var $: any;

@Injectable()
export class BasicService {

    constructor(private http: Http) {

    }

    GetUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users').map(result => result.json());
    }

    GetTodosPerId(Id: any) {
        return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + Id).map(result => result.json());
    }


    SaveData(todo: any) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify(todo);
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://jsonplaceholder.typicode.com/todos', body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch();

    }
}