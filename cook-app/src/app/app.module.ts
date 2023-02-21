import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './features/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './features/recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
