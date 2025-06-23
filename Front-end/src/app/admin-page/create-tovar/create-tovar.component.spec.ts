import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTovarComponent } from './create-tovar.component';

describe('CreateTovarComponent', () => {
  let component: CreateTovarComponent;
  let fixture: ComponentFixture<CreateTovarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTovarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
