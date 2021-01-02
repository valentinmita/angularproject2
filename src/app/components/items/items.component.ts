import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../../environments/item';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  nome: any;
  title: string | undefined;
  url?: firebase.default.storage.UploadTaskSnapshot;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }
  sendObjects(item: any) {
    this.router.navigate(['/details/' + item.id], {
      state: {
        item: JSON.stringify(item),
      },
    });
  }
  Search() {
    if (this.nome != '') {
      this.items = this.items.filter((item) => item.title.match(this.nome));
    } else if (this.nome == '') {
      this.ngOnInit();
    }
  }
  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
  }
  addToCart(prova: any) {
    this.cartService.addToCart(prova);
    window.alert('Your product has been added to the cart!');
  }
}
