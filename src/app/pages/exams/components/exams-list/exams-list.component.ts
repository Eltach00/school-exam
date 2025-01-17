import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LessonDTO } from '@app-api';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
})
export class ExamListComponent implements OnChanges, AfterViewInit {
  @Input() exams: LessonDTO[];
  @Input() newExam: LessonDTO;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<LessonDTO> = new MatTableDataSource();
  displayedColumns: string[] = [
    'courseCode',
    'studentNumber',
    'examDate',
    'grade',
  ];

  columnNames: string[] = [
    'Dərsin kodu',
    'Şagirdin nömrəsi',
    'İmtahan tarixi',
    'Qiymət',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['exams'] && changes['exams'].firstChange) {
      this.dataSource.data = this.exams;
    }
    if (changes['newExam'] && !changes['newExam'].firstChange) {
      this.setData();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  private setData(): void {
    const lessonData: LessonDTO[] = [this.newExam, ...this.dataSource.data];
    this.dataSource.data = lessonData;
    this.dataSource.paginator = this.paginator;
  }
}
