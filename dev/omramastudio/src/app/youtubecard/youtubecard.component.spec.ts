import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubecardComponent } from './youtubecard.component';

describe('YoutubecardComponent', () => {
  let component: YoutubecardComponent;
  let fixture: ComponentFixture<YoutubecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
