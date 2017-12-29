import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../../interfaces/pizza';
import { News } from '../../interfaces/news';

const URLPIZZA = 'http://localhost:3000/pizzas/';
const URLNEWS = 'http://localhost:3000/news/';

@Injectable()
export class DataService {

  constructor(public http: HttpClient) { }

  getPizzasFromServer(): Promise<Pizza[]> {
    return this.http.get<Pizza[]>(URLPIZZA).toPromise();
  }

  getNews(): Promise<News[]> {
    return this.http.get<News[]>(URLNEWS).toPromise();
  }

  getNewsItemById(id: number): Promise<News> {
    return this.http.get<News>(URLNEWS + id).toPromise();
  }
}


