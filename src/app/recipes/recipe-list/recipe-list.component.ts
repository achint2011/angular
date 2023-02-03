import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Poha','A healthy snack in Indian cuisine','https://www.sharmispassions.com/wp-content/uploads/2022/01/PohaRecipe5-500x500.jpg'),
    new Recipe('Poha','A healthy snack in Indian cuisine','https://www.sharmispassions.com/wp-content/uploads/2022/01/PohaRecipe5-500x500.jpg')
  ];


  constructor(){

  }
  ngOnInit(): void {

  }
}
