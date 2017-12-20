import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';
import {Pizza} from '../../interfaces/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPizzas().then((pizzas) => this.pizzas = pizzas);
  }
}

