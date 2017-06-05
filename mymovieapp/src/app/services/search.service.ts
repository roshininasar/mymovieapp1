import { Injectable } from '@angular/core';
import { Http , Response,RequestOptions,Headers} from '@angular/http';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class searchserviceService 
{
    title:string ='Movie Database';
    page =1;

  
  constructor(private jsonp: Jsonp,private http:Http){}
 search(query : string) {
      this.page=1;
      let url = 'https://api.themoviedb.org/3/search/movie?api_key=75752f3c79c18dab31213dca3619a8d7&language=en-US&page='+this.page+'&include_adult=false&query='+query+'&callback=JSONP_CALLBACK';
      return this.jsonp.get(url).map(res => res.json());
    
}
getGenreList(){
       const url='https://api.themoviedb.org/3/genre/movie/list?api_key=75752f3c79c18dab31213dca3619a8d7&language=en-US';
        return this.http.get(url)
                .map((response:Response) => response.json());
}

postfavourite(data)  {
        console.log("In service");
        let url = "http://localhost:3000/api/bear/";
        let encoded_data = data ;
        console.log("Stringified");
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

      return this.http.post(url,encoded_data,options).map(()=>console.log('sucess'));
}

getfavourite(){
  console.log("In service3");
        let url = "http://localhost:3000/api/bear/";
       
        return this.http.get(url) .map((response:Response) => response.json(),()=>console.log("method got"));
}
deletefavourite(id:number){
  console.log("In service");
        let url = "http://localhost:3000/api/bear/";
        console.log("Stringified");
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let url_res = url+id;
        console.log(url_res);
         return this.http.delete(url_res).map((response:Response) => response.json(),()=>
         console.log("deleted"));
        
}
updatefavourite(data){
console.log("In service");
        let url = "http://localhost:3000/api/bear/";
        let encoded_data = data ;
        console.log("Stringified");
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

    
return this.http.put(`${url}/${data.id}`,data,headers).map(res => res.json(),()=>console.log("updated"));
}
}



 


