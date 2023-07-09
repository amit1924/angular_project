import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-list';
  constructor() { //In the code you provided, the constructor function sets an initial value for the title property and schedules a change to that value after a delay of 2000 milliseconds. If you remove the constructor function, the title property will still be initialized with the value 'my-list', but there won't be any scheduled change after the delay.
    // setTimeout(() => {
    //   this.title = 'Change title'
    // }, 2000);
  }
  }

