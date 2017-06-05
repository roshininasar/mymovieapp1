import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule, Jsonp} from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {searchserviceService} from './services/search.service';

import { Routes,RouterModule } from "@angular/router"; 

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FavouriteComponent } from './favourite/favourite.component';
 const appRoutes:
      Routes = [   { path: '', component:MoviesComponent},  
       { path: 'favourite', component:FavouriteComponent} ];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FavouriteComponent
    
  ],
  imports: [
    BrowserModule,
   InfiniteScrollModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [searchserviceService,FavouriteComponent],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
