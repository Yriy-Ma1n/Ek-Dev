import { TestBed } from '@angular/core/testing';

import { CardSumService } from './card-sum.service';

describe('CardSumService', () => {
  let service: CardSumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
