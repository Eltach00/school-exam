import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentPageContainerComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudentPageContainerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
