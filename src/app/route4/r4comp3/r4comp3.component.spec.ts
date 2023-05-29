import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4comp3Component } from './r4comp3.component';

describe('R4comp3Component', () => {
  let component: R4comp3Component;
  let fixture: ComponentFixture<R4comp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R4comp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R4comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
