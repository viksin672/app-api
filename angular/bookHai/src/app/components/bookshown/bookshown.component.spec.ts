import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshownComponent } from './bookshown.component';

describe('BookshownComponent', () => {
  let component: BookshownComponent;
  let fixture: ComponentFixture<BookshownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
