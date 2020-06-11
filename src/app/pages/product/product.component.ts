import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [ new Product('M1234', 'Churi', 1, 2)];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductListener().subscribe((responseProducts: Product[]) => {
      this.products = responseProducts;
    });
  }
}
