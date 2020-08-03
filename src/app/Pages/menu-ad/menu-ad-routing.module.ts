import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAdPage } from './menu-ad.page';

const routes: Routes = [
  {
    path:  '',
    component: MenuAdPage,
    children : [
      {
        path: 'registro-ad',
        loadChildren: () => import('../registro-ad/registro-ad.module').then( m => m.RegistroAdPageModule)

      },
      {
        path: 'modificiar',
        loadChildren: () => import('../modificiar/modificiar.module').then( m => m.ModificiarPageModule),
        
      },
      {
        path: 'eliminar',
        loadChildren: () => import('../eliminar/eliminar.module').then( m => m.EliminarPageModule)
      },
          
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAdPageRoutingModule {}
