import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data-service/data.service';
import {News} from '../../interfaces/news';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  currentNews: News;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.dataService.getNews().then((news) => {
    //     this.currentNews = news.find(itemNews => itemNews.id === +params.id);
    //   });
    // });
    this.route.params.subscribe((params) => {
      this.dataService.getNewsItemById(+params.id).then((newsItem) => {
        this.currentNews = newsItem;
      });
    });
  }
}
