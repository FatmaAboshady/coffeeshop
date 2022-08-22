import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CustomvalidationService } from '../services/customvalidation.service';
// import custom validator to validate that password and confirm password fields match
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 error:string=''
 isRegister:boolean=false

 arra={}
  profileForm = this.fb.group({
    username: ['', [Validators.required]],
    
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

    role: [
      ["admin"]
    ],


    
  },
  )
  ;
  


  constructor(private fb: FormBuilder ,    private customValidator: CustomvalidationService, private _authservice:AuthService , private _router:Router) { }
ngOnInit() {

}
clear(){
  this.profileForm.reset()
}
onSubmit(){
  console.log('hello');
  this.arra=this.profileForm.value;
  console.log('array');
  
  console.log(this.arra);
  
  
  this._authservice.register(this.arra).subscribe((responce)=>{
    console.log(this.profileForm.value)
    console.log(responce);
    
    if(responce.message=='User registered successfully!'){

      console.log(responce.message);
      this.isRegister=true
      this.clear()

    }
  },
  )
  console.log(this.profileForm.value);
  
}
  
}


