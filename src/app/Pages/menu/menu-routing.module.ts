import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:  '',
    component: MenuPage,
    children : [
      {
        path: 'Inicio',
      loadChildren: () => import('../incio/incio.module').then( m => m.IncioPageModule)

      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule)
      },
      {
      path: 'creditos',
      loadChildren: () => import('../creditos/creditos.module').then( m => m.CreditosPageModule)
    }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
