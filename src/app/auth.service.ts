import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';



interface accountDataInterface
{
  name? : string ;
  email : string ;
  password : string ;
  rePassword? : string ;
  phone? : string ;
  resetCode? : string ;
  newPassword? : string ;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDataVar : BehaviorSubject<any> = new BehaviorSubject(null);

  baseURL : string = "https://ecommerce.routemisr.com"

  constructor(private _HttpClient:HttpClient , private _Router:Router)
   {

    if(localStorage.getItem("currentPage"))
    {

     _Router.navigate([localStorage.getItem("currentPage")]) 

    }

   }

  
  registerAPI(reData:accountDataInterface):Observable<any>
  {
   return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signup`,reData)
  }


  loginAPI(reData:accountDataInterface):Observable<any>
  {
   return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signin`,reData)
  }


  forgetAPI(reData:accountDataInterface):Observable<any>
  {
   return this._HttpClient.post(`${this.baseURL}/api/v1/auth/forgotPasswords`,reData)
  }


  verifyAPI(reData:accountDataInterface):Observable<any>
  {
   return this._HttpClient.post(`${this.baseURL}/api/v1/auth/verifyResetCode`,reData)
  }


  newPasswordAPI(reData:accountDataInterface):Observable<any>
  {
   return this._HttpClient.put(`${this.baseURL}/api/v1/auth/resetPassword`,reData)
  }


  saveDataMethod()
  {
   if( localStorage.getItem("userToken") != null)
   {
    this.userDataVar.next(localStorage.getItem("userToken")) 
    this.userDataVar.next(jwtDecode(this.userDataVar.getValue())) ;

   }

   else
   {
    this.userDataVar.next(null)
   }

  }

}
