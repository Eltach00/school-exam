import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { LessonsListComponent } from './components';
import { LessonPageContainerComponent } from './containers';
import { AddLessonDialogComponent } from './dialogs';
import { LessonsRoutingModule } from './lessons-routing.module';
import { AddLessonDialogService } from './services';

@NgModule({
  declarations: [LessonPageContainerComponent, LessonsListComponent],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    AddLessonDialogComponent,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [AddLessonDialogService],
})
export class LessonsModule {}
