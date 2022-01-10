import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { DetailsoppPage } from './detailsopp.page';



@NgModule({
  imports: [
    CommonModule,IonicSelectableModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DetailsoppPage],
  entryComponents: [DetailsoppPage]
})
export class DetailsoppPageModule {}
