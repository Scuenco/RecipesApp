import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  @Input() recipe: Recipe;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; // false = new; true = edit mode
        console.log(this.editMode); // true or false
        if (this.editMode) {
          this.editRecipe();
        } else {
          this.addRecipe();
        }
      }
    );
  }
  addRecipe() {
      console.log('Add new recipe!');
  }
  editRecipe() {
      console.log('Edit this recipe!');
    }
}
