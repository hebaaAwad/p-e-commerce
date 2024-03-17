import { productinterface } from './product.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allProducts : productinterface[] , userWord:string):productinterface[]
  {
  return allProducts.filter((onproduct)=>onproduct.title.toLocaleLowerCase().includes(userWord.toLocaleLowerCase()))
  }

}
