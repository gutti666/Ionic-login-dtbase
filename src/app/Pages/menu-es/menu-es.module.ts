import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuEsPageRoutingModule } from './menu-es-routing.module';

import { MenuEsPage } from './menu-es.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuEsPageRoutingModule
  ],
  declarations: [MenuEsPage]
})
export class MenuEsPageModule {}
