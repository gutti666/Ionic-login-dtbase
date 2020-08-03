import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificiarPageRoutingModule } from './modificiar-routing.module';

import { ModificiarPage } from './modificiar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificiarPageRoutingModule
  ],
  declarations: [ModificiarPage]
})
export class ModificiarPageModule {}
