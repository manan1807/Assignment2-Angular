import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3comp2Component } from './route3comp2.component';

describe('Route3comp2Component', () => {
  let component: Route3comp2Component;
  let fixture: ComponentFixture<Route3comp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3comp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
