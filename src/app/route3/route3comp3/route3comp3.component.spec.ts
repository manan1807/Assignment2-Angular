import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3comp3Component } from './route3comp3.component';

describe('Route3comp3Component', () => {
  let component: Route3comp3Component;
  let fixture: ComponentFixture<Route3comp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3comp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
