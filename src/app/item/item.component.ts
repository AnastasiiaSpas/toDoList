import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
  editable = false;

  @Input() item!: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  remove(item: Item){
   this.itemService.remove(item)
  }

  saveItem(description: string){
    if(!description) return;
    this.editable = false;
    this.item.description = description;
  }

}
