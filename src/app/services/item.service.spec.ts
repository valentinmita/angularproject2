import { TestBed } from '@angular/core/testing';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFirestoreModule],
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
