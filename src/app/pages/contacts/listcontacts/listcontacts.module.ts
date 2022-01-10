import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { ListcontactsPage } from './listcontacts.page';
import { DetailcontactPageModule } from '../detailcontact/detailcontact.module';

const routes: Routes = [
  {
    path: '',
    component: ListcontactsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,DetailcontactPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListcontactsPage]
})
export class ListcontactsPageModule {}
