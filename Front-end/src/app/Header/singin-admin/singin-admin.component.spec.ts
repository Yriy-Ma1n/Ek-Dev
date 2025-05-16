import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginAdminComponent } from './singin-admin.component';

describe('SinginAdminComponent', () => {
  let component: SinginAdminComponent;
  let fixture: ComponentFixture<SinginAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinginAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
