import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.products);
  }

  onRecipe() {
    console.log('click');
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
