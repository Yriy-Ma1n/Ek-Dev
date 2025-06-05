import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TovarListComponent } from './tovar-list.component';

describe('TovarListComponent', () => {
  let component: TovarListComponent;
  let fixture: ComponentFixture<TovarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TovarListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TovarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
