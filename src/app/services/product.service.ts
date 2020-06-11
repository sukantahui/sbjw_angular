import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  productSubject = new Subject<Product[]>();
  constructor(private http: HttpClient) {
    this.http.get('http://127.0.0.1:8000/api/products')
      .subscribe((response: {success: number, data: Product[]}) => {
        // console.log(response);
        // @ts-ignore
        const {data} = response;
        this.products = data;
        this.productSubject.next([...this.products]);
      });
  }

  getProductListener(){
    return this.productSubject.asObservable();
  }
}
