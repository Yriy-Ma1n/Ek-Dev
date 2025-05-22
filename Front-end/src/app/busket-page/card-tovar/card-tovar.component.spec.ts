import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTovarComponent } from './card-tovar.component';

describe('CardTovarComponent', () => {
  let component: CardTovarComponent;
  let fixture: ComponentFixture<CardTovarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTovarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
