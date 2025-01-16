import { Component, OnInit } from '@angular/core';
import { LessonDTO, LessonsService } from '@app-api';
import { LoaderService } from '@app-core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, finalize } from 'rxjs';

import { AddLessonDialogService } from '../../services';

@UntilDestroy()
@Component({
  selector: 'app-lesson-page-container',
  templateUrl: './lesson-page-container.component.html',
  styleUrls: ['./lesson-page-container.component.sass'],
})
export class LessonPageContainerComponent implements OnInit {
  newLesson: LessonDTO;
  lessons: LessonDTO[];

  constructor(
    private readonly addLessonDialogService: AddLessonDialogService,
    private readonly lessonsService: LessonsService,
    private readonly loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.getLessons();
  }

  private getLessons(): void {
    this.loaderService.show();
    this.lessonsService
      .getLessons()
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loaderService.hide();
        }),
      )
      .subscribe((data) => {
        this.lessons = data;
      });
  }

  onClick(): void {
    this.addLessonDialogService
      .open()
      .pipe(filter((result) => !!result))
      .subscribe((lesson: LessonDTO) => {
        this.newLesson = lesson;
      });
  }
}
