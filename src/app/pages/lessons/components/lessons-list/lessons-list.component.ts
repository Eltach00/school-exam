import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';

import { LessonDTO, LessonsService } from '../../../../api';
import { LoaderService } from '../../../../core';

@UntilDestroy()
@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.sass'],
})
export class LessonsListComponent implements OnChanges, OnInit {
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

  constructor(
    private readonly lessonsService: LessonsService,
    private readonly loaderService: LoaderService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newLesson'] && !changes['newLesson'].firstChange) {
      this.setData();
    }
  }

  ngOnInit(): void {
    this.getLessons();
  }

  private getLessons(): void {
    this.loaderService.show();
    this.lessonsService
      .getLessons()
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.loaderService.hide();
        }),
      )
      .subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      });
  }

  private setData(): void {
    const lessonData: LessonDTO[] = [this.newLesson, ...this.dataSource.data];
    this.dataSource.data = lessonData;
    this.dataSource.paginator = this.paginator;
  }
}
