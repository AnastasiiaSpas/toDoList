import { Item } from "../models/item"

export class AddItem {
  static readonly type = '[ToDo] Add Item'
  constructor(public description: string){}
}

export class RemoveItem {
  static readonly type = '[ToDo] Remove Item'
  constructor(public delItem: Item){}
}

export class EditItem {
  static readonly type = '[ToDo] Edit Item'
  constructor(public description: string, public item: Item){}
}

export class FilterItems {
  static readonly type = '[ToDo] Filter Items'
  constructor(public filter: string){}
}


