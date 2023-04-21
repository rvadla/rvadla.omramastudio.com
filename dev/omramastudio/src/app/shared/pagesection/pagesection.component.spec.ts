import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesectionComponent } from './pagesection.component';

describe('PagesectionComponent', () => {
  let component: PagesectionComponent;
  let fixture: ComponentFixture<PagesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
