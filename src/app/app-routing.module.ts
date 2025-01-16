import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lessons',
    loadChildren: () =>
      import('./pages/lessons/lessons.module').then((m) => m.LessonsModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./pages/students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'exams',
    loadChildren: () =>
      import('./pages/exams/exams.module').then((m) => m.ExamsModule),
  },
  { path: '', redirectTo: '/lessons', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
