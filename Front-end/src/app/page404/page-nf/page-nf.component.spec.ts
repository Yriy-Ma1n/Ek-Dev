import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNfComponent } from './page-nf.component';

describe('PageNfComponent', () => {
  let component: PageNfComponent;
  let fixture: ComponentFixture<PageNfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
