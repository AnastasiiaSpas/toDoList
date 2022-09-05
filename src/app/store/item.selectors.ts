import { Selector } from '@ngxs/store'
import { Item } from "../models/item";
import { ItemState, ItemStateModel } from './item.state';

export class ItemSelectors {
  @Selector([ItemState])
  static toDoItems(state: ItemStateModel): Item[] {
    return state.items;
  }
}
