import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {NgModule} from "@angular/core";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {KosaricaComponent} from "./kosarica/kosarica.component";
import {MojProfilComponent} from "./moj-profil/moj-profil.component";
import {AdministracijaComponent} from "./administracija/administracija.component";
import {
  AdministracijaIzdelkiPodrobnostiComponent
} from "./administracija-izdelki-podrobnosti/administracija-izdelki-podrobnosti.component";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {
    path: 'products', component: ProductsComponent, children: [
      {path: ':id', component: ProductDetailComponent}
    ]
  },
  {
    path: 'administracija', component: AdministracijaComponent, children: [
      {path: ':id', component: AdministracijaIzdelkiPodrobnostiComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'kosarica', component: KosaricaComponent},
  {path: 'profile', component: MojProfilComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
