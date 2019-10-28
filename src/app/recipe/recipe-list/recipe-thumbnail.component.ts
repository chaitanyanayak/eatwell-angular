import { Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'recipe-thumbnail',
  templateUrl: './recipe-thumbnail.component.html'
})
export class RecipeThumbnailComponent {

    @Input() recipe: IRecipe;

}
