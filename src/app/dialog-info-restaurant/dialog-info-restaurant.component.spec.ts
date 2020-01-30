import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoRestaurantComponent } from './dialog-info-restaurant.component';

describe('DialogInfoRestaurantComponent', () => {
  let component: DialogInfoRestaurantComponent;
  let fixture: ComponentFixture<DialogInfoRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInfoRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
