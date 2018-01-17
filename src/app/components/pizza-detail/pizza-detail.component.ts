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
  currentPizza: Pizza;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.dataService.getPizzas().then((pizzas) => {
        this.pizzas = pizzas;
        this.currentPizza = pizzas.find((pizza) => pizza.id === +params.id);
      });
    });
  }
}
