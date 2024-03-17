import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

// isLoding
  isLoding : boolean = false;

// errorMessage
  errorMessage!: string;

  constructor(private _AuthService:AuthService , private _Router:Router){}


// registerForm
  registerForm : FormGroup = new FormGroup({

    name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email : new FormControl(null , [Validators.required , Validators.email] ),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[a-z].{6}/)]),
    rePassword : new FormControl(null , [Validators.required , Validators.pattern(/^[a-z].{6}/)]),
    phone : new FormControl(null , [Validators.required , Validators.pattern(/^(01)[0125][0-9]{8}$/)]),


  } ,this.samePassword)

// registerSubmitMethod
  registerSubmitMethod()
  {
     this.isLoding = true;
    this._AuthService.registerAPI(this.registerForm.value).subscribe({
      next : (res)=>{
        console.log(res);
        this.isLoding = false;
        
        // programing routing
        this._Router.navigate(['/login'])

      },
      error : (err)=>{
        this.errorMessage = err.error.message;
        this.isLoding = false;
      },
    })
  }

// samePassword
  samePassword(g:any){
    if(g.get('password')?.value == g.get('rePassword')?.value)
  {
    return null
  }
    else{
      return {"matchedPassword" : true}
    }
    
  }



  
  }

