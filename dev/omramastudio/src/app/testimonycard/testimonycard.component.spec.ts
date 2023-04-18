import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonycardComponent } from './testimonycard.component';

describe('TestimonycardComponent', () => {
  let component: TestimonycardComponent;
  let fixture: ComponentFixture<TestimonycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonycardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
