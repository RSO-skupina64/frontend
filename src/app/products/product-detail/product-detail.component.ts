import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../models/product.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('in');
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log('got id:' + this.id);
        this.productService.getProduct(this.id).subscribe(value => {
          this.product = value
        });
      }
    )
  }


}
