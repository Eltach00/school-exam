import { Component, OnInit } from '@angular/core';
import { StudentDTO, StudentsAPIService } from '@app-api';
import { LoaderService } from '@app-core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, finalize } from 'rxjs';

import { AddStudentDialogService } from '../../services';

@UntilDestroy()
@Component({
  templateUrl: './student-page-container.component.html',
})
export class StudentPageContainerComponent implements OnInit {
  newStudent: StudentDTO;
  students: StudentDTO[];

  constructor(
    private readonly addStudentDialogService: AddStudentDialogService,
    private readonly studentsAPIService: StudentsAPIService,
    private readonly loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(): void {
    this.loaderService.show();
    this.studentsAPIService
      .getStudents()
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loaderService.hide();
        }),
      )
      .subscribe((data) => {
        this.students = data;
      });
  }

  onClick(): void {
    this.addStudentDialogService
      .open()
      .pipe(filter((result) => !!result))
      .subscribe((Student: StudentDTO) => {
        this.newStudent = Student;
        // post the new student
        // this.loaderService.show();
        // this.examsAPIService
        //   .addStudent(Student)
        //   .pipe(
        //     untilDestroyed(this),
        //     finalize(() => {
        //       this.loaderService.hide();
        //     }),
        //   )
        //   .subscribe(() => {
        //     this.getStudents()
        //   });
      });
  }
}
