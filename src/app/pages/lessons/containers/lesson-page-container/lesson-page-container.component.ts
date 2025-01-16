import { Component } from '@angular/core';
import { filter } from 'rxjs';

import { LessonDTO } from '../../../../api';
import { AddLessonDialogService } from '../../services';

@Component({
  selector: 'app-lesson-page-container',
  templateUrl: './lesson-page-container.component.html',
  styleUrls: ['./lesson-page-container.component.sass'],
})
export class LessonPageContainerComponent {
  newLesson: LessonDTO;

  constructor(
    private readonly addLessonDialogService: AddLessonDialogService,
  ) {}

  onClick(): void {
    this.addLessonDialogService
      .open()
      .pipe(filter((result) => !!result))
      .subscribe((lesson: LessonDTO) => {
        this.newLesson = lesson;
      });
  }
}
