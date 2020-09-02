import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPage } from './details.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule  ],
  declarations: [DetailsPage] , 
  entryComponents : [DetailsPage]
})
export class DetailsPageModule {}
