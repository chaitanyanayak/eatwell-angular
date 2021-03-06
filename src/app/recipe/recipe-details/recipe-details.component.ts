import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { IRecipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {

    recipe: IRecipe;

    constructor(private recipeService:RecipeService, private route:ActivatedRoute){}

    ngOnInit(){
      console.log("in here");
      this.recipeService.getRecipe(+this.route.snapshot.params['id']).subscribe((recipe: IRecipe) => {
        this.recipe = recipe;
        console.log(this.recipe);
      });
    }

}
