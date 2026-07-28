import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor and *ngIf
import { CourseCard } from '../../components/course-card/course-card'; 

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard], 
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4 },
    { id: 2, name: 'Web Development', code: 'CS102', credits: 3 },
    { id: 3, name: 'Database Systems', code: 'CS103', credits: 3 },
    { id: 4, name: 'Machine Learning', code: 'CS104', credits: 4 },
    { id: 5, name: 'Cybersecurity', code: 'CS105', credits: 3 }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}