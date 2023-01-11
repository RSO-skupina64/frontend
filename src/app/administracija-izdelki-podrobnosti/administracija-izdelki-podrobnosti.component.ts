import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ProductService} from "../products/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdministracijaService} from "../administracija.service";

@Component({
  selector: 'app-administracija-izdelki-podrobnosti',
  templateUrl: './administracija-izdelki-podrobnosti.component.html',
  styleUrls: ['./administracija-izdelki-podrobnosti.component.css']
})
export class AdministracijaIzdelkiPodrobnostiComponent implements OnInit {
  product: Product;
  id: number;
  updateProductForm: FormGroup;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private administrationService: AdministracijaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.productService.getProduct(this.id).subscribe(value => {
          this.product = value;
          this.initForm();
        });
      }
    )
  }

  initForm() {
    let name = '';
    let brand = '';
    let type = '';
    let concentration = '';
    let concentration_unit = '';

    if (this.product !== undefined) {
      name = this.product.name;
      brand = this.product.brand;
      type = this.product.type;
      concentration = this.product.concentration;
      concentration_unit = this.product.concentration_unit;
    }

    this.updateProductForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'brand': new FormControl(brand, Validators.required),
      'type': new FormControl(type, Validators.required),
      'concentration': new FormControl(concentration, Validators.required),
      'concentration_unit': new FormControl(concentration_unit, Validators.required),
    });
  }

  updateProduct() {
    console.log(this.updateProductForm.value);
    let req = {
      id_product: this.product.id,
      name: this.updateProductForm.value.name,
      brand: this.updateProductForm.value.brand,
      id_product_type: this.updateProductForm.value.type,
      concentration: this.updateProductForm.value.concentration,
      concentration_unit: this.updateProductForm.value.concentration_unit
    }
    this.administrationService.updateProduct(req)
      .subscribe(result => console.log(result));
  }

  removeProduct() {
    console.log('remove ' + this.product.id);
    this.administrationService.deleteProduct(this.product.id)
      .subscribe(result => console.log(result));
  }

}
