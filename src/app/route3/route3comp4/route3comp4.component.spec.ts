import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3comp4Component } from './route3comp4.component';

describe('Route3comp4Component', () => {
  let component: Route3comp4Component;
  let fixture: ComponentFixture<Route3comp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Route3comp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route3comp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
