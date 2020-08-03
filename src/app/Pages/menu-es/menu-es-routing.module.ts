import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuEsPage } from './menu-es.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEsPage,
    children : [
      {
        path: 'informacion',
        loadChildren: () => import('../informacion/informacion.module').then( m => m.InformacionPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuEsPageRoutingModule {}
