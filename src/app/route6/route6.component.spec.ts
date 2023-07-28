import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Route6Component } from './route6.component';
import { RangePipe } from './range.pipe';

describe('Route6Component', () => {
  let component: Route6Component;
  let fixture: ComponentFixture<Route6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Route6Component, RangePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create the component', () => {
    expect(component).toBeTruthy();
  });

  fit('should show alert with correct message when showAlert is triggered', () => {
    const eventMock = { target: { value: 5 } };
    const alertSpy = spyOn(window, 'alert');

    component.showAlert(eventMock);

    expect(alertSpy).toHaveBeenCalledWith('Button of 5th div is clicked!');
  });

});






