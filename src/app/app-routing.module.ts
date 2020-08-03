import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, ChildActivationStart, CanActivate } from '@angular/router';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },

  {
    path: 'menu',
    loadChildren:  () => import('./Pages/menu/menu.module').then( m => m.MenuPageModule ),
    },
  {
    path: 'menu-ad',
    loadChildren: () => import('./Pages/menu-ad/menu-ad.module').then( m => m.MenuAdPageModule),
  },
  {
    path: 'menu-es',
    loadChildren: () => import('./Pages/menu-es/menu-es.module').then( m => m.MenuEsPageModule)
  },
  {
    path: 'carga1/:ID',
    loadChildren: () => import('./Pages/carga1/carga1.module').then( m => m.Carga1PageModule)
  },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
