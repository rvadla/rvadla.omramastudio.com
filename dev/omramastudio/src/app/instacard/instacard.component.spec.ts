import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstacardComponent } from './instacard.component';

describe('InstacardComponent', () => {
  let component: InstacardComponent;
  let fixture: ComponentFixture<InstacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstacardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
