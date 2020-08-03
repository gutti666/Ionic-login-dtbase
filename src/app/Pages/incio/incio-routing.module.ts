import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncioPage } from './incio.page';

const routes: Routes = [
  {
    path: '',
    component: IncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncioPageRoutingModule {}
