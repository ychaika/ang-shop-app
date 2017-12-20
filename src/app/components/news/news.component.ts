import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';
import {News} from '../../interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNews().then((news) => this.news = news);
  }
}

