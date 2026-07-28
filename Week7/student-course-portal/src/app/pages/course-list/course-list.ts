import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCard } from '../../components/course-card/course-card'; 
import { HighlightDirective } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard], 
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  selectedCourseId: number | null = null;

  constructor(private store: Store) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit() {
    this.store.dispatch(loadCourses());
  }

  onEnroll(courseId: number) {
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}