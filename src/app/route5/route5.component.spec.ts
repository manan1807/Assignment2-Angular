import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Route5Component } from './route5.component';

describe('Route5Component', () => {
  let component: Route5Component;
  let fixture: ComponentFixture<Route5Component>;
  let httpMock: HttpTestingController;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Route5Component],
      imports: [HttpClientTestingModule],
      
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch students data and initialize variables', () => {
    const mockStudentsData = [
      { id: 1, name: 'Alice', age: 20 },
      { id: 2, name: 'Bob', age: 22 },
    ];
    const mockResponse = { studentsData: mockStudentsData };
    const url = '/assets/students.json';
    const req = httpMock.expectOne(url);
    req.flush(mockStudentsData);

    expect(component.studentsData).toEqual(mockResponse.studentsData);
    expect(component.stuHeaders).toEqual(['id', 'name', 'age']);
    expect(component.count).toBe(0);
    expect(component.headerValue).toBe('');
    expect(component.newStatedArrayOfStudents).toEqual(mockStudentsData);
  });
  it('should sort students data in ascending order when called once', () => {
    const eventMock = { target: { value: 'name' } };
    const mockStudentsData = [
      { id: 2, name: 'Bob', age: 22 },
      { id: 1, name: 'Alice', age: 20 },
    ];
    component.studentsData = mockStudentsData;
    component.count = 0; 

    component.getOrderChanged(eventMock);

    const expectedSortedData = [...mockStudentsData].sort((a, b) => a.name.localeCompare(b.name));
    expect(component.newStatedArrayOfStudents).toEqual(expectedSortedData);
    expect(component.count).toBe(1); 
  });

  it('should sort students data in descending order when called twice', () => {
    const eventMock = { target: { value: 'name' } };
    const mockStudentsData = [
      { id: 2, name: 'Bob', age: 22 },
      { id: 1, name: 'Alice', age: 20 },
    ];
    component.studentsData = mockStudentsData;
    component.count = 1; 

    component.getOrderChanged(eventMock);

    const expectedSortedData = [...mockStudentsData].sort((a, b) => b.name.localeCompare(a.name));
    expect(component.newStatedArrayOfStudents).toEqual(expectedSortedData);
    expect(component.count).toBe(2); 
  });

  it('should reset students data to its original order when called three times', () => {
    const eventMock = { target: { value: 'name' } };
    const mockStudentsData = [
      { id: 2, name: 'Bob', age: 22 },
      { id: 1, name: 'Alice', age: 20 },
     
    ];
    component.studentsData = mockStudentsData;
    component.count = 2; 

    component.getOrderChanged(eventMock);

    expect(component.newStatedArrayOfStudents).toEqual(mockStudentsData);
    expect(component.count).toBe(0); 
  });
  it('should fetch students data and initialize variables', () => {
    expect(component.studentsData).toBeTruthy();
    expect(component.stuHeaders).toBeTruthy();
    expect(component.count).toBe(0);
    expect(component.headerValue).toBe('');
    expect(component.newStatedArrayOfStudents).toBeTruthy();
  });

it('should reset the order and set count to 0', () => {
  const sortedArray = [...component.studentsData].sort((a: any, b: any) => a['name'].localeCompare(b['name']));
  component.newStatedArrayOfStudents = sortedArray;
  component.count = 3;

  component.resetOriginalOrder(sortedArray);

  expect(component.newStatedArrayOfStudents).toEqual(component.studentsData);
  expect(component.count).toBe(0);
});
});