import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


// isLoding
isLoding : boolean = false;

// forgetFlag
forgetFlag : boolean = true;

// verifyFlag
verifyFlag : boolean = false;

// newFlag
newPasswordFlag : boolean = false;

// errorMessage
  errorMessage!: string;

  constructor(private _AuthService:AuthService , private _Router:Router){}


// loginForm
  loginForm : FormGroup = new FormGroup({

    email : new FormControl(null , [Validators.required , Validators.email] ),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[a-z].{6}/)]),

  })

// foem 1 ==> Forget Password  ------
  forgetForm : FormGroup = new FormGroup({

  email : new FormControl(null , [Validators.required , Validators.email] ),
})


// foem 2 ==> Verify Code  ------
verifyForm : FormGroup = new FormGroup({

  resetCode : new FormControl(null , [Validators.required] ),
})


// foem 3 ==> New Password  ------
  newPasswordForm : FormGroup = new FormGroup({

  email : new FormControl(null , [Validators.required , Validators.email] ),
  newPassword : new FormControl(null , [Validators.required , Validators.pattern(/^[a-z].{6}/)]),

})

// loginSubmitMethod
  loginSubmitMethod()
  {
     this.isLoding = true;
    this._AuthService.loginAPI(this.loginForm.value).subscribe({
      next : (res)=>{

        this.isLoding = false;

        if(res.message == "success")
        // 1- localStorage
        // 2- token
        // 3- home
        {
          // 1-localStorage y hoba
          localStorage.setItem("userToken" , res.token);
          // 2- call service
          this._AuthService.saveDataMethod()
          // 3- home (programing routing)
          this._Router.navigate(['/home'])

          

        }

      },
      error : (err)=>{
         this.errorMessage = err.error.message;
        

        this.isLoding = false;
      },
    })
  }


// forgetSubmitMethod
  forgetSubmitMethod()
{
   this.isLoding = true;
  this._AuthService.forgetAPI(this.forgetForm.value).subscribe({
    next : (res)=>{

      this.isLoding = false;

      if(res.message)
      
      {
        this.forgetFlag = false;
        this.verifyFlag = true;
      }

    },
    error : (err)=>{
       this.errorMessage = err.error.message;
      

      this.isLoding = false;
    },
  })
}

// veriySubmitMethod
  veriySubmitMethod()
{
   this.isLoding = true;
   this._AuthService.verifyAPI(this.verifyForm.value).subscribe({
    next : (res)=>{

      this.isLoding = false;

      if(res.status == "Success")
      
      {
        this.verifyFlag = false;
        this.newPasswordFlag = true; 
      }

    },
    error : (err)=>{
       this.errorMessage = err.error.message;
      

      this.isLoding = false;
    },
  })
}

// newPasswordSubmitMethod
  newPasswordSubmitMethod()
{
   this.isLoding = true;
   this._AuthService.newPasswordAPI(this.newPasswordForm.value).subscribe({
    next : (res)=>{

      this.isLoding = false;

      if(res.token)
      
      {
        console.log("newtamam");
        
      }

    },
    error : (err)=>{
       console.log("newt");
       
      

      this.isLoding = false;
    },
  })
}



}
