import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { Store } from '@ngxs/store';
import { EditItem, RemoveItem } from '../store/item.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  editable = false;

  @Input() item!: Item;

  constructor(private store: Store) { }

  ngOnInit(): void { }

  remove(item: Item){
    this.store.dispatch(new RemoveItem(item))
  }

  saveItem(description: string){
    this.editable = false;
    this.store.dispatch(new EditItem(description, this.item))
  }

}
