import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncioPageRoutingModule } from './incio-routing.module';

import { IncioPage } from './incio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncioPageRoutingModule
  ],
  declarations: [IncioPage]
})
export class IncioPageModule {}
