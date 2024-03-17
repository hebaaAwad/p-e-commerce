import { Component, OnInit  } from '@angular/core';
import { ProductsService } from '../products.service';
import { productinterface } from '../product.interface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  allProducts: productinterface[] = []
    

  constructor(private _ProductsService:ProductsService){}


    ngOnInit(): void {
      
      localStorage.setItem("currentPage" , "/products")

      // Get Products
      this._ProductsService.getProductsAPI().subscribe({

        next : (res)=>{
          this.allProducts= res.data;

        },
        error : (err)=>{}

      })
    
    }
    
  }

    
    
      
      



  
    