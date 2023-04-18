import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecardFooterComponent } from './titlecard-footer.component';

describe('TitlecardFooterComponent', () => {
  let component: TitlecardFooterComponent;
  let fixture: ComponentFixture<TitlecardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlecardFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlecardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
