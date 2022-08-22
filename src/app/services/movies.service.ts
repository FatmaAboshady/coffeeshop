import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Header } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
 


@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  
    

  constructor( private _httpClinent:HttpClient, private _auth:AuthService) { }
  // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJGYXRtYSBGYXRtYSIsImlhdCI6MTY2MDY2MjIwMCwiZXhwIjoxNjYwNzQ4NjAwfQ.skhNKDA8Ox2TxSwnvA2G7h-ntE8PKwdXvjbFmbJRew5AtffC1rmlPCjGdGnOng9lJyHzyBoAKL7rOr6jEUhuMw

  
  getTrending():Observable<any>{
 
   

    return this._httpClinent.get(`https://app-coffe2022.herokuapp.com/product/all`)
  }













  getMovieDetails(id:string):Observable<any>{
    return this._httpClinent.get(`https://api.themoviedb.org/3/movie/${id}}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }
}
 






