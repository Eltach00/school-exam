import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogHeaderComponent } from '@app-shared';

@Component({
  standalone: true,
  templateUrl: './add-lesson.dialog.component.html',
  imports: [
    DialogHeaderComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
  ],
})
export class AddLessonDialogComponent implements OnInit {
  addLessonForm: FormGroup;

  constructor(
    private readonly dialogRef: MatDialogRef<AddLessonDialogComponent>,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onCloseClicked(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.addLessonForm.valid) {
      this.dialogRef.close(this.addLessonForm.value);
    }
  }

  private initForm(): void {
    this.addLessonForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}$/)]],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zçğıöşüÇĞİÖŞÜ\s]+$/),
          Validators.maxLength(30),
        ],
      ],
      class: ['', [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      teacherFirstName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zçğıöşüÇĞİÖŞÜ\s]+$/),
          Validators.maxLength(30),
        ],
      ],
      teacherLastName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zçğıöşüÇĞİÖŞÜ\s]+$/),
          Validators.maxLength(30),
        ],
      ],
    });
  }
}
