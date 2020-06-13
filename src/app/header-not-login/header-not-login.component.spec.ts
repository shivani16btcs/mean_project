import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotLoginComponent } from './header-not-login.component';

describe('HeaderNotLoginComponent', () => {
  let component: HeaderNotLoginComponent;
  let fixture: ComponentFixture<HeaderNotLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNotLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
