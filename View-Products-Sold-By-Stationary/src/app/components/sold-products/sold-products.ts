import { Component } from '@angular/core';
import { Products } from '../../Services/products';

@Component({
  selector: 'app-sold-products',
  standalone: false,
  templateUrl: './sold-products.html',
  styleUrl: './sold-products.css',
})
export class SoldProducts {
  constructor(private soldProducts:Products){}
item:any[] = [];
ngOnInit(){
  this.item = this.soldProducts.productsArray()
}

}
