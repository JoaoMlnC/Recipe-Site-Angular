import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelecte = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  new Recipe('second test recipe', 'this is only a second test', 'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_640.jpg')
];

constructor(){}

onRecipeSelected(recipe: Recipe) {
this.recipeWasSelecte.emit(recipe);
}

}
