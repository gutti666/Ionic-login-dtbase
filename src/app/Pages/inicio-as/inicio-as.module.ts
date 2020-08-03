import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAsPageRoutingModule } from './inicio-as-routing.module';

import { InicioAsPage } from './inicio-as.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAsPageRoutingModule
  ],
  declarations: [InicioAsPage]
})
export class InicioAsPageModule {}
