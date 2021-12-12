import { Ingredient } from "../shared/ingredients.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string
    //adding ingredient to recipe
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.name =  name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}