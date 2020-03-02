import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teGokkenGetal:number=Math.floor((Math.random() * 120) + 1);
  title = 'first-app';
}

