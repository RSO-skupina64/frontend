import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-administracija-izdelki',
  templateUrl: './administracija-izdelki.component.html',
  styleUrls: ['./administracija-izdelki.component.css']
})
export class AdministracijaIzdelkiComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
