import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { NewsComponent } from './components/news/news.component';
import { FormsComponent } from './components/forms/forms.component';

export const appRoutes: Routes = [
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
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: '**',
    component: CatalogComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

export const routingComponents = [CatalogComponent, NewsComponent, NewsDetailComponent, PizzaComponent, PizzaDetailComponent];
