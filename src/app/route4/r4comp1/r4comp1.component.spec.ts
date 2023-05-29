import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4comp1Component } from './r4comp1.component';

describe('R4comp1Component', () => {
  let component: R4comp1Component;
  let fixture: ComponentFixture<R4comp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R4comp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R4comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
