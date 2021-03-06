import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';
  constructor(private httpClient: HttpClient) { }

  findAll() {
    // return [{ _id:'1', name:'Angular', category:'Front-End'}];
    // return this.httpClient.get<Course[]>(this.API);
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      // delay(5000),//remove in production env
      tap(courses => console.log(courses))
      );
  }
}
