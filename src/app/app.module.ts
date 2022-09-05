import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemState } from './store/item.state';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([ItemState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
