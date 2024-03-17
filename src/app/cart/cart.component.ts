import { loggedcartinterface } from './../../app/loggedcart.interfacet';

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  CartItem : any = [] ;

  constructor(private _CartService:CartService){}

  ngOnInit(): void {
    
    localStorage.setItem("currentPage" , "/cart")

    this._CartService.getAllCartItemAPI().subscribe({
      next : (res)=>{ this.CartItem = res.data.products
      console.log(this.CartItem);
      },
      
      error : (err)=> {console.log(err)}

    })

  }

}
