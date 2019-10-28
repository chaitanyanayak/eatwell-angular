import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html'
})
export class RecipeComponent {

    recipe: IRecipe;

    showRecipes: boolean = true;
    message: string = "Loading Recipes . . . ";
        
    editRecipe: boolean = false;

    constructor(private recipeService: RecipeService) { }

    add():void {
        //this.recipeService.add(this.recipe);
    };

    enableEditRecipe():void {
        this.editRecipe = true;
    };

    updateRecipe():void {
        this.editRecipe = false;
    };

    cancelEdit = function () {
        this.editRecipe = false;
    }

}
