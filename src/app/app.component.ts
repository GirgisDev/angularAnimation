import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  viewMode = "map";
  courses;

  loadCourses () {
    this.courses = [
      { id: 1, name: "angular" },
      { id: 2, name: "react" }
    ];
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

}
