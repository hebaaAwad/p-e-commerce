import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseURL : string = "https://ecommerce.routemisr.com"

  constructor(private _HttpClient:HttpClient) { }


  getCategoriesAPI():Observable<any>
  {
    return this._HttpClient.get(`${this.baseURL}/api/v1/categories`)
  }

  getSpecCategoriesAPI(_id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseURL}/api/v1/categories/${_id}`)
  }

}
