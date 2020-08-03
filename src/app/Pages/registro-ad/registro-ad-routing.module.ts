import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAdPage } from './registro-ad.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAdPageRoutingModule {}
