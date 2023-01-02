import {Injectable} from "@angular/core";
import {Subject} from 'rxjs'

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  startedEditing = new Subject<number>();

  getIngredients() {
  }

  getIngredient(index: number) {
  }

  addIngredient() {
  }

  addIngredients() {
  }

  updateIngredient(index: number) {
  }

  deleteIngredient(index: number) {
  }
}
