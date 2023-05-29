import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4comp2Component } from './r4comp2.component';

describe('R4comp2Component', () => {
  let component: R4comp2Component;
  let fixture: ComponentFixture<R4comp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R4comp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R4comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
