import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardBackgroundComponent } from './photocard-background.component';

describe('PhotocardBackgroundComponent', () => {
  let component: PhotocardBackgroundComponent;
  let fixture: ComponentFixture<PhotocardBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocardBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotocardBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
