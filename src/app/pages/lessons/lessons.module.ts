import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { LessonsService } from '../../api';

import { LessonsListComponent } from './components';
import { LessonPageContainerComponent } from './containers';
import { AddLessonDialogComponent } from './dialogs';
import { LessonsRoutingModule } from './lessons-routing.module';

@NgModule({
  declarations: [LessonPageContainerComponent, LessonsListComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    AddLessonDialogComponent,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [LessonsService],
})
export class LessonsModule {}
