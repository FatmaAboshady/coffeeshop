import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin:boolean=false;
  constructor( private _authService:AuthService){
    _authService.currentUser.subscribe(()=>{
      if(_authService.currentUser.getValue() !=null){
        this.isLogin=true
      }else{
        this.isLogin=false
      }
    })

  }
  

  logmeout(){
    localStorage.clear()
    this._authService.currentUser.subscribe(()=>{
      if(this._authService.currentUser.getValue() !=null){
        this.isLogin=true
      }else{
        this.isLogin=false
      }
    })
  }





	
  
  ngOnInit() {
  
  }

}
