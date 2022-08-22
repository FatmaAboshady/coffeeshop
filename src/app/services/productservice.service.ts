import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  products=[];
  eachproduct=[];
   options ={
    headers:{
      // 'accept':'*/*',
      // 'Content-Type':'application/json',
      'Authorization':'Bearer '+localStorage.getItem('userId')
    }

  } 

  constructor( private _httpClinent:HttpClient ) { }
  allcategoriesapicall(categorytId:any){
    return this._httpClinent.get(`https://app-coffe2022.herokuapp.com/product/all/${categorytId}`,this.options)

  }
  // login(formData:any):Observable<any>{
  //   // post(url, data send to url)
  //   //  return this._httpclient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  //   return this._httpclient.post('https://app-coffe2022.herokuapp.com/api/auth/signin',formData)

  // }
  addapicall(formData:any){
    return this._httpClinent.post('https://app-coffe2022.herokuapp.com/product/add',formData ,this.options)

  }
deleteapicall(productId:any){
  return this._httpClinent.delete(`https://app-coffe2022.herokuapp.com/product/del/${productId}`,this.options)



}

profile(){
  return this._httpClinent.get(`https://app-coffe2022.herokuapp.com/api/test/user/profile`,this.options)

}
}