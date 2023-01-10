import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductsComponent} from './products/products.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductItemComponent} from './products/product-list/product-item/product-item.component';
import {DropdownDirective} from "./models/dropdown.directive";
import {AppRoutingModule} from "./app.routing-module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./products/product.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from "./authentication/register/register.component";
import {KosaricaComponent} from './kosarica/kosarica.component';
import {KosaricaProductsComponent} from './kosarica-products/kosarica-products.component';
import {KosaricaItemsComponent} from './kosarica-items/kosarica-items.component';
import {MojProfilComponent} from './moj-profil/moj-profil.component';
import {AdministracijaComponent} from './administracija/administracija.component';
import { AdministracijaIzdelkiComponent } from './administracija-izdelki/administracija-izdelki.component';
import { AdministracijaIzdelkiPodrobnostiComponent } from './administracija-izdelki-podrobnosti/administracija-izdelki-podrobnosti.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    DropdownDirective,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    KosaricaComponent,
    KosaricaProductsComponent,
    KosaricaItemsComponent,
    MojProfilComponent,
    AdministracijaComponent,
    AdministracijaIzdelkiComponent,
    AdministracijaIzdelkiPodrobnostiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
