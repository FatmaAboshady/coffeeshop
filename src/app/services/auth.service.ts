import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _httpclient:HttpClient) { }
  currentUser = new BehaviorSubject(null) ;
   options={
    headers:{
      'Authorization' :'Bearer'+localStorage.getItem('')
    }

  }

  saveCurrentUser()
  {
    let token:any = localStorage.getItem('userId')
    this.currentUser.next(jwtDecode(token))
    this.currentUser.getValue()
    console.log("user");
    
    console.log( this.currentUser);
    
  }

  register(formData:any):Observable<any>{
    let options = {
      headers:{
        'accept': '*/*' ,
         'Content-Type': 'application/json'
      }
    }
    

    // post(url, data send to url)
    return this._httpclient.post('https://app-coffe2022.herokuapp.com/api/auth/signup',formData)


  }

  login(formData:any):Observable<any>{
    // post(url, data send to url)
    //  return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formData)
    return this._httpclient.post('https://app-coffe2022.herokuapp.com/api/auth/signin',formData)

  }

  add(formData:any):Observable<any>{
    // post(url, data send to url)
    //  return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formData)
    return this._httpclient.post('https://app-coffe2022.herokuapp.com/product/add',formData)

  }
}
