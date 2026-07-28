import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
// Add the Home import
import { Home } from './pages/home/home'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Add Home to this array
  imports: [RouterOutlet, Header, Home], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-course-portal';
}