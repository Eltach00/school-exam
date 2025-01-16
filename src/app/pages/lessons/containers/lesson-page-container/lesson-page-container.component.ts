import { Component } from '@angular/core';

import { AddLessonDialogService } from '../../services';

@Component({
  selector: 'app-lesson-page-container',
  templateUrl: './lesson-page-container.component.html',
  styleUrls: ['./lesson-page-container.component.sass'],
})
export class LessonPageContainerComponent {
  constructor(
    private readonly addLessonDialogService: AddLessonDialogService,
  ) {}

  onClick(): void {
    this.addLessonDialogService.open();
  }
}
