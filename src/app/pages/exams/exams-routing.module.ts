import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamPageContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ExamPageContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsRoutingModule {}
