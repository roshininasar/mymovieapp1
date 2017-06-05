import { Component, OnInit } from '@angular/core';
import {searchserviceService} from '../services/search.service';
import { Http , Response,RequestOptions,Headers} from '@angular/http';
import { FavouriteComponent} from '../favourite/favourite.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
  
})

export class MoviesComponent implements OnInit {
 totalPages;
 query: string;
  searchResults: Array<Object>;
  genereResults=[];
  scrolldistance=0;
    throttle=20;
    page=1;
   // favarr=[];

   constructor(private _search:searchserviceService,private http:Http,private favouritecomponent : FavouriteComponent ) {

this._search.getGenreList().subscribe(res => {this.genereResults = res.genres;});
   }
  
  search()
   {
      this._search.search(this.query).subscribe(res => {this.searchResults = res.results;
       this.totalPages=res.total_pages;  
    });

      
    }
    ngOnInit() {
       
    }
    generemethod(value){
      let array=[];
      this.genereResults.forEach(function(a) {
        if(value.includes(a.id)){
          array.push(a.name);
        }
      });
      return array;

    }   
   
    onScroll (query) {
        this._search.page++;
       
         if(this._search.page<=this.totalPages)
         {
        console.log('scrolled!!');
         this._search.search(query)
        .subscribe(
            // data=>{this.getData.push(data.results),console.log(this.getData)},
            data=> {data.results.forEach((elem) => {
              this.searchResults.push(elem);
            })},
            error=>alert(error),
            ()=>console.log("finished")
      );
         }
    }
    
  }
 