import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAsPage } from './inicio-as.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAsPageRoutingModule {}
