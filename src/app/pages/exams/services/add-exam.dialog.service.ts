import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExamDTO } from '@app-api';
import { DIALOG_CONFIGS } from '@app-shared';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { AddExamDialogComponent } from '../dialogs';

@UntilDestroy()
@Injectable()
export class AddExamDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  open(): Observable<ExamDTO> {
    return this.matDialog
      .open<AddExamDialogComponent>(AddExamDialogComponent, {
        ...DIALOG_CONFIGS,
        panelClass: ['custom-mat-dialog'],
      })
      .afterClosed()
      .pipe(untilDestroyed(this));
  }
}
