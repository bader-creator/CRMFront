import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsformationPage } from './detailsformation.page';
import { ViewformationPage } from '../viewformation/viewformation.page';
import { ViewformationPageModule } from '../viewformation/viewformation.module';

const routes: Routes = [
  {
    path: '',
    component: DetailsformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ViewformationPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsformationPage]
})
export class DetailsformationPageModule {}
