import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R4comp4Component } from './r4comp4.component';

describe('R4comp4Component', () => {
  let component: R4comp4Component;
  let fixture: ComponentFixture<R4comp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R4comp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(R4comp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
