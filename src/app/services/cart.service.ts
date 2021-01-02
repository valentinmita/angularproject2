import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = Array();

  constructor() {}

  addToCart(item: any) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  deleteItemCart(e: number) {
    this.items.splice(e, 1);
  }
  totalSumCart() {
    const total = this.items.reduce((sum, items) => sum + items.price, 0);
    return total;
  }
}
