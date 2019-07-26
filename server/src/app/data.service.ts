import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {map,filter, scan} from 'rxjs/operators'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { }

  getAstroDetails() {
    return this.http.get('http://localhost:3000/api/astro').pipe(
       map(res=>res.json()))
  }

  addAstroDetails(newAstro){
    let headers=new Headers();
    headers.append('content-type','application/json');
    return this.http
     .post('http://localhost:3000/api/astro',newAstro,{headers:headers}).pipe(
       map(res=>res.json()))

    
  }
  deleteAstroDetails(id){
    return this.http
     .delete('http://localhost:3000/api/astro/'+id).pipe(
       map(res=>res.json()));
  }

  updateAstroDetails(newAstro){
    let headers=new Headers();
    headers.append('content-type','application/json');
    return this.http
     .put('http://localhost:3000/api/astro/'+newAstro._id,newAstro,{headers:headers}).pipe(
       map(res=>res.json()))

    
  }


}