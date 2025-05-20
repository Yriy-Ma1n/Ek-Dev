import { TestBed } from '@angular/core/testing';

import { ListCategoryService } from './list-category.service';

describe('ListCategoryService', () => {
  let service: ListCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
