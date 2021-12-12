import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Fufu', 'The official Ghanaian dish', 'https://pcbossonline.com/wp-content/uploads/2020/08/Screenshot_20200821-164314-1.jpg',
        [
            new Ingredient('Meat', 50),
            new Ingredient('Cassava', 15),
            new Ingredient('Plantain', 5)
            
        ]),
        
        new Recipe('Banku', 'The best Ghanaian dish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DWGTHQqEadckHwwepjyON9PSfvsSV1okxg&usqp=CAU',
        [
            new Ingredient('Meat', 50),
            new Ingredient('Corn Dough', 15),
            new Ingredient('Cassava Dough', 5)
            
        ]),
      ];

      constructor(private shoppingListService: ShoppingListService){}

      //adding slice helps us create an exact copy of the recipe array without being able to change the main recipe above
      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.shoppingListService.addIngredients(ingredients);        
      }
}