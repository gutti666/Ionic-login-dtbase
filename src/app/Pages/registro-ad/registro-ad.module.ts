import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAdPageRoutingModule } from './registro-ad-routing.module';

import { RegistroAdPage } from './registro-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroAdPageRoutingModule
  ],
  declarations: [RegistroAdPage]
})
export class RegistroAdPageModule {}
