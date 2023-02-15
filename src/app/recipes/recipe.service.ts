import {Recipe} from './recipe.model'
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Poha','A healthy snack in Indian cuisine','https://www.sharmispassions.com/wp-content/uploads/2022/01/PohaRecipe5-500x500.jpg'),
    new Recipe('Idli','A healthy snack made with Rice','https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/05/292.jpg?fit=1148%2C1077&ssl=1')
  ];
  getRecipes(){
    return this.recipes.slice();
  }
}
