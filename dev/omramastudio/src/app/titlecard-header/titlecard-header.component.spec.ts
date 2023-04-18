import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecardHeaderComponent } from './titlecard-header.component';

describe('TitlecardHeaderComponent', () => {
  let component: TitlecardHeaderComponent;
  let fixture: ComponentFixture<TitlecardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlecardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlecardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
