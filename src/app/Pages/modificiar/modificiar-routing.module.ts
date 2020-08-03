import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificiarPage } from './modificiar.page';

const routes: Routes = [
  {
    path: '',
    component: ModificiarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificiarPageRoutingModule {}
