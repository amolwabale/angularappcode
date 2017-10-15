import { Component } from '@angular/core';
import { BasicService } from '../../Service/Basic.service';

@Component({
    selector: 'my-app',
    templateUrl: './home.html',
})
export class HomeComponent {

    name: string;
    userData: any;

    constructor(private MyService: BasicService) {

        this.name = "Angular Service";
        //this.MyService.GetUsers().subscribe(posts => { console.log(posts) });
        this.MyService.GetUsers().subscribe(posts => { this.userData = posts });

    }

    SaveStudentData(form: any) {
        this.MyService.SaveData(form);
    }

}