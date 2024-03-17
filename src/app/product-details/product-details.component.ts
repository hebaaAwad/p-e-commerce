import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { productinterface } from '../product.interface';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
     
    },
    nav: false
  }

  pId : string =""

  oneProduct! : productinterface

  constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductsService:ProductsService ){}

  ngOnInit(): void {
    
    this._ActivatedRoute.params.subscribe( (p)=>{

      this.pId = p["id"]
      
      this._ProductsService.getSpecProdAPI(this.pId).subscribe({
        next : (res)=>{
          this.oneProduct = res.data;
        }
      })

    })

  }

}
