import { Component, OnInit } from '@angular/core';
import { Http , Response,RequestOptions,Headers} from '@angular/http';
import {searchserviceService} from '../services/search.service';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
genereResults=[];
getResults=[];
 
   constructor(private _search:searchserviceService,private http:Http) { 

    this._search.getfavourite().subscribe(res => {this.getResults = res});
    this._search.getGenreList().subscribe(res => {this.genereResults = res.genres;});
   }
  ngOnInit() {
  }

pushfavourite(id,title,poster_path,vote_average,overview,release_date,genre_ids){
     let obj={id,title,poster_path,vote_average,overview,release_date,genre_ids};
  //  console.log(obj);

 this._search.postfavourite(obj).subscribe(

     
          (data) => console.log('posted!!')     // complete;
   );
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
    deletefav(id){
      console.log(id);
      this._search.deletefavourite(id).subscribe(
        data=>{this.getResults=data},
        error=>{},
        ()=>{}
      );
    }
    updateRating(id,title,poster_path,vote_average,overview,release_date,genre_ids){
      let obj={id,title,poster_path,vote_average,overview,release_date,genre_ids};
      this._search.updatefavourite(obj).subscribe(data=>{this.getResults=data},
        error=>{},
        ()=>{}
      );
    }
}
