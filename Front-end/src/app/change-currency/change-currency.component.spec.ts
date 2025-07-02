import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCurrencyComponent } from './change-currency.component';

describe('ChangeCurrencyComponent', () => {
  let component: ChangeCurrencyComponent;
  let fixture: ComponentFixture<ChangeCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeCurrencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
