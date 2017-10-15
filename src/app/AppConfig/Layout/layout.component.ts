import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
  <div>{{Title}}</div>
      <router-outlet></router-outlet>
  `,
})
export class AppLayout {
    Title: string;

    constructor() {
        this.Title = ""
    }

}