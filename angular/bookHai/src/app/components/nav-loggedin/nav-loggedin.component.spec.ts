import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoggedinComponent } from './nav-loggedin.component';

describe('NavLoggedinComponent', () => {
  let component: NavLoggedinComponent;
  let fixture: ComponentFixture<NavLoggedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLoggedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
