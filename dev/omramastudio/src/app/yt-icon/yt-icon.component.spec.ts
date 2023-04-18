import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtIconComponent } from './yt-icon.component';

describe('YtIconComponent', () => {
  let component: YtIconComponent;
  let fixture: ComponentFixture<YtIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YtIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
