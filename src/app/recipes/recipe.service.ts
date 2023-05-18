import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe [] = [
        new Recipe(
            'Barbecue Ribs', 
            'The perfect choice for a barbecue', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
            [
                new Ingredient('Pork ribs', 10),
                new Ingredient('Salad', 1)
            ]),
        new Recipe(
            'Bread', 
            'Making some Bread!', 
            'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_640.jpg',
            [
                new Ingredient('Flour',2),
                new Ingredient('Egg',2)
            ])
      ];

      constructor(private slService: ShoppingListService) {}
      
      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }
    }