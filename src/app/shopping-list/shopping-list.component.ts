import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {Ingredient} from '../shared/ingredient';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
