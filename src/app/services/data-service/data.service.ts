import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pizza} from '../../interfaces/pizza';
import {News} from '../../interfaces/news';


@Injectable()
export class DataService {

  constructor(public http: HttpClient) { }

  getPizzas(): Promise<Pizza[]> {
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas/').toPromise();
  }

  getNews(): Promise<News[]> {
    return this.http.get<News[]>('http://localhost:3000/news/').toPromise();
  }

}


