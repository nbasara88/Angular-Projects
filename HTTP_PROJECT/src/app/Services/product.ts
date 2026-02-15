import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Iproducts } from '../interfaces/iproducts';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http:HttpClient){}

getProducts(): Observable<Iproducts[]> {
  return this.http.get<Iproducts[]>('http://localhost:3000/products/getAll');
}

}
