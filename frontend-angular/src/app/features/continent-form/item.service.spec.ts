import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ItemService } from './item.service';

describe('continent-form-ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
