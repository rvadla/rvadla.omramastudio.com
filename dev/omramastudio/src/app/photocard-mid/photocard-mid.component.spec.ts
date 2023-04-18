import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardMidComponent } from './photocard-mid.component';

describe('PhotocardMidComponent', () => {
  let component: PhotocardMidComponent;
  let fixture: ComponentFixture<PhotocardMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocardMidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotocardMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
