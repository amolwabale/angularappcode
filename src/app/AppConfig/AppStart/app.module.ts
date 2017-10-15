import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent }  from '../../Views/Home/home.component';
import { TodoComponent } from '../../Views/TodoDetails/todo.component';
import { AppLayout } from '../Layout/layout.component';
import { BasicService } from '../../Service/Basic.service';

import { Routing } from '../Router/route.component';

@NgModule({
    imports: [BrowserModule, Routing, HttpModule, FormsModule ],
    declarations: [HomeComponent, TodoComponent, AppLayout ],
    bootstrap: [AppLayout ],
  providers: [BasicService]
})
export class AppModule { }
