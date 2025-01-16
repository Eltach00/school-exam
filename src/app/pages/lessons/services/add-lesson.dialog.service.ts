import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { LessonDTO } from '../../../api';
import { DIALOG_CONFIGS } from '../../../shared';
import { AddLessonDialogComponent } from '../dialogs';

@UntilDestroy()
@Injectable()
export class AddLessonDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  open(): Observable<LessonDTO> {
    return this.matDialog
      .open<AddLessonDialogComponent>(AddLessonDialogComponent, {
        ...DIALOG_CONFIGS,
        panelClass: ['custom-mat-dialog'],
      })
      .afterClosed()
      .pipe(untilDestroyed(this));
  }
}
