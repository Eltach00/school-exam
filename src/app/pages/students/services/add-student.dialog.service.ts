import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDTO } from '@app-api';
import { DIALOG_CONFIGS } from '@app-shared';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { AddStudentDialogComponent } from '../dialogs';

@UntilDestroy()
@Injectable()
export class AddStudentDialogService {
  constructor(private readonly matDialog: MatDialog) {}

  open(): Observable<StudentDTO> {
    return this.matDialog
      .open<AddStudentDialogComponent>(AddStudentDialogComponent, {
        ...DIALOG_CONFIGS,
        panelClass: ['custom-mat-dialog'],
      })
      .afterClosed()
      .pipe(untilDestroyed(this));
  }
}
