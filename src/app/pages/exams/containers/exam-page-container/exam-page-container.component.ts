import { Component, OnInit } from '@angular/core';
import { ExamDTO, ExamsAPIService } from '@app-api';
import { LoaderService } from '@app-core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, finalize } from 'rxjs';

import { AddExamDialogService } from '../../services';

@UntilDestroy()
@Component({
  templateUrl: './exam-page-container.component.html',
})
export class ExamPageContainerComponent implements OnInit {
  newExam: ExamDTO;
  exams: ExamDTO[];

  constructor(
    private readonly addExamDialogService: AddExamDialogService,
    private readonly examsAPIService: ExamsAPIService,
    private readonly loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.getExams();
  }

  private getExams(): void {
    this.loaderService.show();
    this.examsAPIService
      .getExams()
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loaderService.hide();
        }),
      )
      .subscribe((data) => {
        this.exams = data;
      });
  }

  onClick(): void {
    this.addExamDialogService
      .open()
      .pipe(filter((result) => !!result))
      .subscribe((Exam: ExamDTO) => {
        this.newExam = Exam;
        // post the new exam
        // this.loaderService.show();
        // this.examsAPIService
        //   .addExam(Exam)
        //   .pipe(
        //     untilDestroyed(this),
        //     finalize(() => {
        //       this.loaderService.hide();
        //     }),
        //   )
        //   .subscribe(() => {
        //     this.getExams()
        //   });
      });
  }
}
