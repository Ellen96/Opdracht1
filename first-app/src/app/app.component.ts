import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'first-app';
  afwijking: number;
  aantalGokken: number;
  teGokkenGetal: number;
  gok: number;
  spelGewonnen:boolean;

  constructor() {
    this.restartSpel();
  }
  restartSpel() {
    this.aantalGokken = 0;
    this.teGokkenGetal = Math.floor(Math.random() * 100 + 1);
    this.gok = null;
    this.afwijking = null;
    this.spelGewonnen = false;
  }
  controleGok() {
    this.afwijking = this.teGokkenGetal - this.gok;
    this.aantalGokken = this.aantalGokken + 1;
    if(this.afwijking===0)
    {this.spelGewonnen=true;   
    }
  }
  
  
}
