import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonybarComponent } from './testimonybar.component';

describe('TestimonybarComponent', () => {
  let component: TestimonybarComponent;
  let fixture: ComponentFixture<TestimonybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonybarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
