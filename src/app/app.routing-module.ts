import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path: 'recipes', component: ProductsComponent, children: [
    ]},
  {path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: 'shopping-edit', component: ShoppingEditComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
