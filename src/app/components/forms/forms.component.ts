import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  value = 'start';
  name = '';
  myNumber: number;


  constructor() { }

  ngOnInit() {
  }

  setNumber(event: any) {
    this.myNumber = event.target.value;
  }
}
