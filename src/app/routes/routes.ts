import { Routes } from '@angular/router';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from '../recipe/recipe-list/recipe-list.component';

export const appRoutes: Routes = [
 {
   path: 'recipes',
   component: RecipeListComponent
 },
 {
   path: 'recipes/:id',
   component: RecipeDetailsComponent
 },
 {
   path: '',
   redirectTo: '/recipes',
   pathMatch: 'full'
 }
]
