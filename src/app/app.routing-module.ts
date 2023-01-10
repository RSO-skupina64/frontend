import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {NgModule} from "@angular/core";
import {ProductDetailComponent} from "./products/product-detail/product-detail.component";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {KosaricaComponent} from "./kosarica/kosarica.component";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: 'products', component: ProductsComponent, children: [
      {path: ':id', component: ProductDetailComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: 'shopping-edit', component: ShoppingEditComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'kosarica', component: KosaricaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
