import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Poha','A healthy snack in Indian cuisine','https://www.sharmispassions.com/wp-content/uploads/2022/01/PohaRecipe5-500x500.jpg'),
    new Recipe('Idli','A healthy snack made with Rice','https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/05/292.jpg?fit=1148%2C1077&ssl=1')
  ];


  constructor(){

  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  ngOnInit(){

  }
}
