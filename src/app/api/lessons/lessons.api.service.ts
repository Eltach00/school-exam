import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LessonDTO } from './dto';

@Injectable()
export class LessonsService {
  constructor(private http: HttpClient) {}

  getLessons(): Observable<LessonDTO[]> {
    return this.http.get<LessonDTO[]>('assets/data/lessons.json');
  }
}
