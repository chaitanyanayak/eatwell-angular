import { Component } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

    recipes: IRecipe[];

    constructor(private recipeService:RecipeService) {}

    ngOnInit() {
        this.recipeService.getRecipes().subscribe((recipes: IRecipe[]) => {
          this.recipes = recipes;
          console.log(this.recipes);
        });
    }
}
