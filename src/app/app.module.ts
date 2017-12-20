import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { NewsComponent } from './components/news/news.component';

import { DataService } from './services/data-service/data.service';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:id',
    component: NewsDetailComponent
  },
  {
    path: 'pizza',
    component: PizzaComponent
  },
  {
    path: 'pizza/:id',
    component: PizzaDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    NewsComponent,
    CatalogComponent,
    PizzaDetailComponent,
    NewsDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
