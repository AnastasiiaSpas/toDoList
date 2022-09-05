import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { Store, Select } from '@ngxs/store';
import { AddItem, FilterItems } from './store/item.actions';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { ItemSelectors } from './store/item.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  @Select(ItemSelectors.toDoItems) toDoItems$!: Observable<Item[]>;

  title = 'toDoList';
  newToDo = '';

  // filter: 'all' | 'active' | 'done' = 'all';

  constructor(private store: Store){  }

  ngOnInit() { }

  filterItem(filter: string){
    this.store
      .dispatch( new FilterItems(filter))
      .subscribe( )
  }
  // get items() {
  //   if (this.filter === 'all') {
  //     return this.store.subscribe(data=> console.log(data));
  //   }
  //   return this.store.subscribe(data=> {
  //     this.filter === 'done'? data.done : !data.done
  //   }
  //   );
  // }

  addItem(description: string){
    this.store
      .dispatch(new AddItem(description))
      .subscribe(() => this.newToDo = '')
  }
}
