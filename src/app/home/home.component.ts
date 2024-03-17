import { CartService } from './../cart.service';
import { CategoriesInterface } from './../categories.interface';
import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { productinterface } from '../product.interface';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputValue : string =""

  ustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false,
  }

  categoriesSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay : true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false,
  }


  allProducts: productinterface[] = []

  allCtegories:CategoriesInterface[] = []
  
  constructor(private toastEvokeService: ToastEvokeService , private _CartService:CartService , private _ProductsService:ProductsService , private _CategoriesService:CategoriesService){}

  // Get Products
  ngOnInit(): void {
    
    localStorage.setItem("currentPage" , "/home")

    this._ProductsService.getProductsAPI().subscribe({

      next : (res)=>{
        this.allProducts= res.data;

      },
      error : (err)=>{}

    })


    // Get Categories
  this._CategoriesService.getCategoriesAPI().subscribe({

    next : (res)=>{
      this.allCtegories= res.data;

    },
    error : (err)=>{}
    

  })


  }

  addCartBtn(pId:string)
  {
    this._CartService.addToCartAPI(pId).subscribe({

      next : (res)=> this.toastEvokeService.success('Success', res.message).subscribe(),
      error : (err)=> {console.log(err)}
      
    })
  }

  }



