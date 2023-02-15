import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Poha',
    'A healthy snack in Indian cuisine',
    'https://www.sharmispassions.com/wp-content/uploads/2022/01/PohaRecipe5-500x500.jpg',
    [
      new Ingredient('Poha', 1),
      new Ingredient('Onion', 4),
      new Ingredient('Peanuts', 50)
    ]),
    new Recipe('Idli',
    'A healthy snack made with Rice',
    'https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/05/292.jpg?fit=1148%2C1077&ssl=1',
    [
      new Ingredient('Rawa', 1),
      new Ingredient('Onion', 4),
      new Ingredient('Peanuts', 50)
    ])
  ];
  getRecipes(){
    return this.recipes.slice();
  }
}
