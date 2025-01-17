import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StudentDTO } from './dto';

@Injectable({ providedIn: 'root' })
export class StudentsAPIService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<StudentDTO[]> {
    return this.http.get<StudentDTO[]>('assets/data/students.json');
  }
}
