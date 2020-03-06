import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  teGokkenGetal:number=Math.floor((Math.random() * 120) + 1);
  count: number=0;
  ingegevenGetal = +(document.getElementById("ingegevenGetal"));
  controleAntwoord = document.getElementById("controleAntwoord");
  clickCount():void{this.count++;
    if(this.ingegevenGetal==this.teGokkenGetal)
    { alert("Goed geraden je hebt gewonnen.");}
    else
    {
    alert("Probeer opnieuw.");
    }
  };
  title = 'first-app';
  
}
