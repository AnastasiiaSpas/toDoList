import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './models/item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'toDoList';
  newToDo = '';
  allItems: Array<any> = [];

  filter: 'all' | 'active' | 'done' = 'all';

  constructor(private itemService: ItemService){}

  ngOnInit() {
    this.allItems = this.itemService.allItems;
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string){
    this.itemService.addItem(description);
    this.newToDo = '';
  }
}
