import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import { AuthService } from '../services/auth.service';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error =''

  profileForm = this.fb.group({
    username: ['', [Validators.required , Validators.minLength(3) , Validators.maxLength]],
  
    password: ['', Validators.required],
    
    
    



    
  },
  // {
  //   validator: this.customValidator.passwordMatchValidator('password', 'confirmPassword'),
  // }
  );

  constructor(private fb: FormBuilder , private _router:Router,    private customValidator: CustomvalidationService, private _AuthSrevice : AuthService) { }
ngOnInit() {

}
clear(){
  this.profileForm.reset()
}
onSubmit(profileForm: FormGroup){
  this._AuthSrevice.login(this.profileForm.value).subscribe((response)=>{
    console.log(this.profileForm.value);
    console.log("log in token");
    
    console.log(response);
    
    if(response.accessToken){
      localStorage.setItem('userId', response.accessToken)

      this._router.navigate(['/home'])
    } else{
      this.error = response.message;
    }
  })
  if(localStorage.getItem('userId')){
    this._AuthSrevice.saveCurrentUser()

  }
  
  console.log(profileForm);
  

  console.log(this.profileForm.value);
  
}
  
 

}
