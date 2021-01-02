import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { finalize } from 'rxjs/operators';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AngularFireStorage, createUploadTask } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  title: any;
  price: any;
  description: any;
  image: any;
  myform: FormGroup;
  downloadURL?: Observable<string>;
  fb: any;
  isSubmitted?: boolean;

  url?: any;
  constructor(
    private ItemService: ItemService,
    private afs: AngularFireStorage
  ) {
    this.myform = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  onAddSubmit() {
    this.isSubmitted = true;
    if (this.myform.valid) {
      this.myform.value['image'] = this.fb;
      this.ItemService.addListing(this.myform.value);
      alert('Your order has been submitted');
      this.resetForm();
    }
  }
  resetForm() {
    this.myform.reset();
    this.isSubmitted = false;
  }

  getUrl(event: any) {
    var n = Date.now();

    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.afs.ref(filePath);
    const task = this.afs.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              this.fb = url;
            }
          });
        })
      )
      .subscribe((url) => {
        if (url) {
          this.url = url;
        }
      });
  }
  get formControls() {
    return this.myform['controls'];
  }
}
