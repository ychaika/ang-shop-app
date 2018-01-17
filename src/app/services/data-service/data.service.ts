import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../../interfaces/pizza';
import { News } from '../../interfaces/news';

const URLPIZZA = 'http://localhost:3000/pizzas/';
const URLNEWS = 'http://localhost:3000/news/';

@Injectable()
export class DataService {
  pizzaList: Pizza[];

  constructor(public http: HttpClient) { }

  getPizzas(): Promise<Pizza[]> {
    if (this.pizzaList === undefined) {
      this.http.get<Pizza[]>(URLPIZZA).toPromise().then((pizzas) => {
        this.pizzaList = pizzas;
      });
      return this.http.get<Pizza[]>(URLPIZZA).toPromise();
    } else {
      console.log('well done');
      return new Promise(resolve => {
        resolve(this.pizzaList);
      });

    }

  }

  getNews(): Promise<News[]> {
    return this.http.get<News[]>(URLNEWS).toPromise();
  }

  getNewsItemById(id: number): Promise<News> {
    return this.http.get<News>(URLNEWS + id).toPromise();
  }
}


