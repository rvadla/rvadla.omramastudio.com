import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardFullsizeComponent } from './photocard-fullsize.component';

describe('PhotocardFullsizeComponent', () => {
  let component: PhotocardFullsizeComponent;
  let fixture: ComponentFixture<PhotocardFullsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocardFullsizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotocardFullsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
