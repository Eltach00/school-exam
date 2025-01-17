import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { StudentListComponent } from './components';
import { StudentPageContainerComponent } from './containers';
import { AddStudentDialogComponent } from './dialogs';
import { AddStudentDialogService } from './services';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [StudentListComponent, StudentPageContainerComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    AddStudentDialogComponent,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [AddStudentDialogService],
})
export class StudentsModule {}
