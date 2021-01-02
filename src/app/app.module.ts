import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ItemsComponent } from './components/items/items.component';
import { ItemService } from './services/item.service';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';

import { AddItemComponent } from './components/add-item/add-item.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    NavComponent,
    CartComponent,
    AddItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: ItemsComponent },
      { path: 'details/:id', component: ItemComponent },
      { path: 'cart', component: CartComponent },
      { path: 'newitem', component: AddItemComponent },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CartService, ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
