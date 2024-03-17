import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseURL : string = "https://ecommerce.routemisr.com"

  userHeader : any = {token : localStorage.getItem("userToken")};

  constructor(private _HttpClient:HttpClient) {}

    // 1 prameter => pId 
    addToCartAPI(pId:string):Observable<any>
        {
          return this._HttpClient.post(`${this.baseURL}/api/v1/cart` , {productId:pId} , {headers : this.userHeader  })
        }

    // 2 prameters => pId , pCount
    UpdateCartItemQuantityAPI(pId:string , pCount:string):Observable<any>
        {
          return this._HttpClient.put(`${this.baseURL}/api/v1/cart/${pId}` , {count : pCount} , {headers : this.userHeader  })
        }


        
    getAllCartItemAPI():Observable<any>
        {
          return this._HttpClient.put(`${this.baseURL}/api/v1/cart` , {headers : this.userHeader  })
        }


    // 1 prameter => pId 
    removeCartItemAPI(pId:string):Observable<any>
        {
          return this._HttpClient.delete(`${this.baseURL}/api/v1/cart/${pId}` , {headers : this.userHeader  })
        }



    clearCartAPI():Observable<any>
        {
          return this._HttpClient.delete(`${this.baseURL}/api/v1/cart` , {headers : this.userHeader  })
        }


  




}
