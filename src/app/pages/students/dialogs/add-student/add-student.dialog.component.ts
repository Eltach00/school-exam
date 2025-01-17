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
  selector: 'app-add-student.dialog',
  templateUrl: './add-student.dialog.component.html',
  imports: [
    DialogHeaderComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
  ],
})
export class AddStudentDialogComponent implements OnInit {
  addStudentForm: FormGroup;

  constructor(
    private readonly dialogRef: MatDialogRef<AddStudentDialogComponent>,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onCloseClicked(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.addStudentForm.valid) {
      this.dialogRef.close(this.addStudentForm.value);
    }
  }

  private initForm(): void {
    this.addStudentForm = this.fb.group({
      name: ['', Validators.required],
      class: ['', [Validators.required, Validators.pattern('^\\d{1,2}$')]],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('^\\d{1,5}$')]],
    });
  }
}
