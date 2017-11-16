import { Component } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',

})
export class JumbotronComponent {

  private jbtHeading: string;
  private jbttext: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;


  constructor(){
    this.jbtHeading="Hello World";
    this.jbttext="This is a simple hero unit";
    this.jbtBtnText="Read More";
    this.jbtBtnUrl="/about";
  }
}

