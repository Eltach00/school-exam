import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExamDTO } from '@app-api';
import { DialogHeaderComponent } from '@app-shared';

@Component({
  standalone: true,
  selector: 'app-add-exam.dialog',
  templateUrl: './add-exam.dialog.component.html',
  imports: [
    DialogHeaderComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class AddExamDialogComponent implements OnInit {
  addExamForm: FormGroup;

  constructor(
    private readonly dialogRef: MatDialogRef<AddExamDialogComponent>,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onCloseClicked(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.addExamForm.valid) {
      const value: ExamDTO = {
        ...this.addExamForm.value,
        examDate: formatDate(
          this.addExamForm.value.examDate,
          'dd.MM.yyyy',
          'en-GB',
        ),
      };
      this.dialogRef.close(value);
    }
  }

  private initForm(): void {
    this.addExamForm = this.fb.group({
      studentNumber: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      grade: ['', [Validators.required, Validators.pattern(/^\d{1}$/)]],
      examDate: ['', Validators.required],
      courseCode: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}$/)]],
    });
  }
}
