import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { ExamListComponent } from './components';
import { ExamPageContainerComponent } from './containers';
import { AddExamDialogComponent } from './dialogs';
import { ExamsRoutingModule } from './exams-routing.module';
import { AddExamDialogService } from './services';

@NgModule({
  declarations: [ExamListComponent, ExamPageContainerComponent],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    AddExamDialogComponent,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [AddExamDialogService],
})
export class ExamsModule {}
