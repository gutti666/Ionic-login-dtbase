import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carga1PageRoutingModule } from './carga1-routing.module';

import { Carga1Page } from './carga1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carga1PageRoutingModule
  ],
  declarations: [Carga1Page]
})
export class Carga1PageModule {}
