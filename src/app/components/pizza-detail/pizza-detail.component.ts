import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data-service/data.service';
import {Pizza} from '../../interfaces/pizza';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  pizzas: Pizza[];
  currentPizza: {};

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (this.pizzas === undefined) {
        this.dataService.getPizzasFromServer().then((pizzas) => {
          this.pizzas = pizzas;
          this.currentPizza = pizzas.find((pizza) => pizza.id === +params.id);
        });
      } else {
        this.currentPizza = this.pizzas.find((pizza) => {
          return pizza.id === +params.id;
        });
      }
    });
  }
}
