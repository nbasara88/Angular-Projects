import { Component, signal } from '@angular/core';
import { Product } from './Services/product';
import { HttpClient} from '@angular/common/http';
import { Iproducts } from './interfaces/iproducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
 
  constructor(private service:Product){}
  products:Iproducts[] = []
  ngOnInit(){
    
    
  this.service.getProducts().subscribe(
   (result)=>{this.products = result;});
  console.log(this.products);
  console.log(this.products.length);
  
  
  }


  protected readonly title = signal('HTTP_PROJECT');
}
