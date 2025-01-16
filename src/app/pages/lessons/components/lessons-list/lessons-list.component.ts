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
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.sass'],
})
export class LessonsListComponent implements OnChanges, AfterViewInit {
  @Input() lessons: LessonDTO[];
  @Input() newLesson: LessonDTO;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<LessonDTO> = new MatTableDataSource();
  displayedColumns: string[] = [
    'code',
    'name',
    'class',
    'teacherFirstName',
    'teacherLastName',
  ];

  columnNames: string[] = [
    'Dərsin Kodu',
    'Dərsin Adı',
    'Sinif',
    'Müəllimin Adı',
    'Müəllimin Soyadı',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lessons'] && changes['lessons'].firstChange) {
      this.dataSource.data = this.lessons;
    }
    if (changes['newLesson'] && !changes['newLesson'].firstChange) {
      this.setData();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  private setData(): void {
    const lessonData: LessonDTO[] = [this.newLesson, ...this.dataSource.data];
    this.dataSource.data = lessonData;
    this.dataSource.paginator = this.paginator;
  }
}
