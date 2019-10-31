import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from './../../services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.recipeForm.value);
    this.recipeService.addRecipe(this.recipeForm.value).subscribe();
  }

}
