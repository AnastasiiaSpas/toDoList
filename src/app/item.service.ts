import { Item } from "./models/item";

export class ItemService {

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  addItem(description: string){
    this.allItems.unshift({
      description: description,
      done: false
    })
  }

  remove(item: Item){
    this.allItems.splice(this.allItems.indexOf(item), 1)
  }
}
