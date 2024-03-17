import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { BrandsInterface } from '../brands.interface';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  
  
  allBrands:BrandsInterface[] = []

 constructor(private _BrandsService:BrandsService) {}
  ngOnInit(): void {
    
    localStorage.setItem("currentPage" , "/brands")

    this._BrandsService. getBrands().subscribe({

      next : (res)=>{
        this.allBrands= res.data;

      },
      error : (err)=>{}

    })

  }

}
