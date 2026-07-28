import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(2),
      tap(courses => console.log('Courses loaded from API:', courses.length)),
      map(courses => courses.filter(c => c.credits > 0)),
      catchError(err => {
        console.error('API Error:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }
}