import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcontactPage } from './newcontact.page';

const routes: Routes = [
  {
    path: '',
    component: NewcontactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewcontactPage]
})
export class NewcontactPageModule {}
