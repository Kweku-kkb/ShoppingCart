import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onRecipeAdded() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

/**
 * Old code
 * 
 * 
 * import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
 
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeAdded(){
    this.recipeSelected.emit();
  }

}
 */
