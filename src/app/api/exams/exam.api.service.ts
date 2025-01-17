import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ExamDTO } from './dto';

@Injectable({ providedIn: 'root' })
export class ExamsAPIService {
  constructor(private http: HttpClient) {}

  getExams(): Observable<ExamDTO[]> {
    return this.http.get<ExamDTO[]>('assets/data/exams.json');
  }
}
