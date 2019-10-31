import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';
import { RecipeService } from './services/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipeThumbnailComponent } from './recipe/recipe-list/recipe-thumbnail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RecipeListComponent,
    RecipeThumbnailComponent,
    RecipeDetailsComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
