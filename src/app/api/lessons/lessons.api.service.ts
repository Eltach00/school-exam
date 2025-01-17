import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LessonDTO } from './dto';

@Injectable({ providedIn: 'root' })
export class LessonsAPIService {
  constructor(private http: HttpClient) {}

  getLessons(): Observable<LessonDTO[]> {
    return this.http.get<LessonDTO[]>('assets/data/lessons.json');
  }
}
