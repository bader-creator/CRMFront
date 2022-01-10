import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocalisationPage } from './localisation.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule  ],
  declarations: [LocalisationPage],
  entryComponents : [LocalisationPage]
})
export class LocalisationPageModule {}
