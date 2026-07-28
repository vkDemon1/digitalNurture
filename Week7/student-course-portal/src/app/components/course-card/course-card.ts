import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {
  @Input() course!: { id: number, name: string, code: string, credits: number };

  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('Course changed!', {
      previous: changes['course']?.previousValue,
      current: changes['course']?.currentValue
    });
  }
}