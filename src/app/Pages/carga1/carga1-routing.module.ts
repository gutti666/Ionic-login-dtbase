import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carga1Page } from './carga1.page';

const routes: Routes = [
  {
    path: '',
    component: Carga1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carga1PageRoutingModule {}
