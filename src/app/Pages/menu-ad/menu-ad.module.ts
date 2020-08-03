import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAdPageRoutingModule } from './menu-ad-routing.module';

import { MenuAdPage } from './menu-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAdPageRoutingModule
  ],
  declarations: [MenuAdPage]
})
export class MenuAdPageModule {}
