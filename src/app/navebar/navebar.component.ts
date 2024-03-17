import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.scss']
})
export class NavebarComponent implements OnInit{

  isLogin : boolean = false ;

  constructor(private _AuthService:AuthService , private _Router:Router)
  {

  }

  ngOnInit(): void
  {

    this._AuthService.userDataVar.subscribe(()=>{

      if(this._AuthService.userDataVar.getValue() == null){

        this.isLogin = false;
  
      }
      else
      {
        this.isLogin = true;
  
      }

    })

  }


  logout()
  {
    localStorage.removeItem("userToken");
    this._AuthService.saveDataMethod()
    this._Router.navigate(['/login'])

  }


}
