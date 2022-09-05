import { state } from '@angular/animations'
import { Injectable } from '@angular/core'
import { State, Action, StateContext, Selector } from '@ngxs/store'
import { Item } from '../models/item'
import { AddItem, FilterItems, RemoveItem, EditItem } from './item.actions'

export interface ItemStateModel {
  items: Item[]
}

@State<ItemStateModel>({
  name: 'items',
  defaults: {
    items : [
      { description: 'eat', done: true },
      { description: 'sleep', done: false },
      { description: 'play', done: false },
      { description: 'laugh', done: false },
    ]
  }
})

@Injectable()
export class ItemState {

  @Action(AddItem)
  addItem(ctx: StateContext<ItemStateModel>, action: AddItem){
    const {description} = action;
     if(!description){
      return
     }

     const state = ctx.getState()

     const newItem: Item = {
      description: description,
      done: false
     }

     ctx.setState({
      ...state,
      items: [...state.items, newItem]
     })

  }

  @Action(RemoveItem)
  removeItem(ctx: StateContext<ItemStateModel>, action: RemoveItem){
    const {delItem} = action;
    if(!delItem){
      return
    }

    const state = ctx.getState()

    state.items.splice(state.items.indexOf(delItem), 1)

    ctx.setState({
      items: [...state.items ]
    })
  }

  @Action(EditItem)
  saveItem(ctx: StateContext<ItemStateModel>, action: EditItem){
    const {description, item} = action;
    const state = ctx.getState()
    if(!description) return

    const getItemIndex= state.items.indexOf(item)
    state.items[getItemIndex].description = description;

    ctx.setState({
      items: state.items
    })
  }

  @Action(FilterItems)
  filterItem(ctx: StateContext<ItemStateModel>, action: FilterItems){
    const{filter} = action;
    const state = ctx.getState()

    if(filter === 'all'){
      console.log(state.items)
       state.items
    } else if (filter === 'done'){

      ctx.setState({
        ...state,
        items: state.items.filter(item=> item.done)
      })
      console.log(state.items)
    } else {
      // const activeItems = ctx.getState().items.filter(item=>{
      //   if(!item.done) {
      //     return item
      //   } else return undefined
      // })
      // const activeItems = ctx.getState().items.filter(item=> !item.done)
      ctx.setState({
        ...state,
        items: state.items.filter(item=> !item.done)
      })
      console.log(state.items)
    }
  }

}
