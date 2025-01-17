import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonPageContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LessonPageContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
