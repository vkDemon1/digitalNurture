import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';

describe('CourseCardComponent', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });

  it('should accept a course via @Input and render it', () => {
    component.course = {
      id: 99,
      name: 'Test Driven Development',
      code: 'CS999',
      credits: 3,
      gradeStatus: 'passed'
    };
    
    fixture.detectChanges(); 
    
    expect(component.course.name).toEqual('Test Driven Development');
  });
});