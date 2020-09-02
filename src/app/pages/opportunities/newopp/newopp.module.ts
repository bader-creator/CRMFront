import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewoppPage } from './newopp.page';

const routes: Routes = [
  {
    path: '',
    component: NewoppPage
  }
];

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,
    FormsModule,IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewoppPage]
})
export class NewoppPageModule {}
