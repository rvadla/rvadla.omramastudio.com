import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardThumbnailComponent } from './photocard-thumbnail.component';

describe('PhotocardThumbnailComponent', () => {
  let component: PhotocardThumbnailComponent;
  let fixture: ComponentFixture<PhotocardThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotocardThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotocardThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
