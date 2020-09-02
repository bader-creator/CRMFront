import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoumissionlistPage } from './soumissionlist.page';
import { SoumdetailsPageModule } from '../soumdetails/soumdetails.module';

const routes: Routes = [
  {
    path: '',
    component: SoumissionlistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,SoumdetailsPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoumissionlistPage]
})
export class SoumissionlistPageModule {}
