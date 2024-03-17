import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CategoriesInterface } from '../categories.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  allCategories:CategoriesInterface[] =[]

  constructor(private _CategoriesService:CategoriesService) {}

  ngOnInit(): void {
    
    localStorage.setItem("currentPage" , "/categories")

    this._CategoriesService. getCategoriesAPI().subscribe({

      next : (res)=>{
        this.allCategories= res.data;

      },
      error : (err)=>{}

    })

  }

}
