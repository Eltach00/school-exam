import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';

import { LessonsService } from '../../../../api';
import { LoaderService } from '../../../../core';

@UntilDestroy()
@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.sass'],
})
export class LessonsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<unknown> = new MatTableDataSource();
  displayedColumns: string[] = [
    'code',
    'name',
    'class',
    'teacherFirstName',
    'teacherLastName',
  ];

  constructor(
    private readonly lessonsService: LessonsService,
    private readonly loaderService: LoaderService,
  ) {}

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
}
