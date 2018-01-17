import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-child',
  templateUrl: './forms-child.component.html',
  styleUrls: ['./forms-child.component.css']
})
export class FormsChildComponent implements OnInit {
  @Input() chNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
