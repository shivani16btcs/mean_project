import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPopupComponent } from './forget-popup.component';

describe('ForgetPopupComponent', () => {
  let component: ForgetPopupComponent;
  let fixture: ComponentFixture<ForgetPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
