import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { DataService } from './services/data-service/data.service';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { NewsComponent } from './components/news/news.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { FormsChildComponent } from './components/forms-child/forms-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    NewsComponent,
    CatalogComponent,
    PizzaDetailComponent,
    NewsDetailComponent,
    HeaderComponent,
    routingComponents,
    FormsComponent,
    FormsChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
