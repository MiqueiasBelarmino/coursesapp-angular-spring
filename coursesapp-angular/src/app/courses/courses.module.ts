import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

// import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';
// import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule
    // MatTableModule,
    // MatCardModule,
    // MatToolbarModule
  ]
})
export class CoursesModule { }
