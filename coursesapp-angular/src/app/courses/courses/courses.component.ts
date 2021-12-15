import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // courses: Course[] = [
  //   {_id:'1', name:'Angular', category:'Front-End'}
  // ];
  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  constructor(private coursesService: CoursesService,public dialog: MatDialog) {
    /*this.courses = [];*/
    this.courses$ = this.coursesService.findAll().pipe(
      catchError(error => {
        this.onError('Fail to load courses.');
        return of([]);
      })
    );
  }

  onError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: message,
    });
  }

  ngOnInit(): void {
  }

}
