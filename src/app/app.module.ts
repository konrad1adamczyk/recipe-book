import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {DropdownDirective} from './dropdown.directive';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListAddComponent} from './shopping-list/shopping-list-add.component';
import {RecipeService} from './recipes/recipe.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {routing} from './app.routing';
import {RecipeStartComponent} from './recipes/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
