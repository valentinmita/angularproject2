import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { Item } from '../../environments/item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsCollection: any;
  items: Observable<Item[]>;
  idField: any;
  itemDoc: any;
  constructor(public afs: AngularFirestore) {
    this.items = this.afs
      .collection<Item>('items')
      .valueChanges({ idField: 'id' });
    this.itemsCollection = this.afs.collection<Item>('items');
  }

  getItems() {
    return this.items;
  }
  addListing(item: Item) {
    console.log(item);
    this.itemsCollection?.add(item);
  }
  deleteItem(item: Item) {
    this.itemDoc = this.itemsCollection?.doc(`${item.id}`);
    this.itemDoc.delete();
  }
}
