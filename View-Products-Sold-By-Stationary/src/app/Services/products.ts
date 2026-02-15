import { Injectable } from '@angular/core';
import { stationary } from '../Array';
@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(){}
  productsArray(){
    return stationary
  }
  
}
