import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Maggi', 1.5),
        new Ingredient('Onions', 3),
    ];

    getIngredients() {
       return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    //adding a list of ingredients for recipe service part
    addIngredients(ingredients: Ingredient[]) {
        //this works but emits too many events
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        //instead we use the spread operator ... to help the push function pass the array we receive as a list and emit it in one go
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}

/**
 *     ingredientAdded = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient('Peas', 7),
        new Ingredient('Plantains', 9),
    ];

    getIngredients() {
       return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
    }
}
 * 
 * add button was not working because we were receiving 
 * a copy of the ingredient array but not the original
 * ///this would have solved the issue
 * getIngredients() {
       return this.ingredients;
    }
 * To solve this, we inform the component of new data and then
     generate a new event and pass in the original ingredient and not a copy 
    this also prevents someone from accessing the real copy and is safe
 * 
 */