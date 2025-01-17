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
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
})
export class StudentListComponent implements OnChanges, AfterViewInit {
  @Input() students: LessonDTO[];
  @Input() newStudent: LessonDTO;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<LessonDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['number', 'name', 'lastName', 'class'];

  columnNames: string[] = ['Nomre', 'Ad', 'Soyad', 'Sinif'];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['students'] && changes['students'].firstChange) {
      this.dataSource.data = this.students;
    }
    if (changes['newStudent'] && !changes['newStudent'].firstChange) {
      this.setData();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  private setData(): void {
    const lessonData: LessonDTO[] = [this.newStudent, ...this.dataSource.data];
    this.dataSource.data = lessonData;
    this.dataSource.paginator = this.paginator;
  }
}
