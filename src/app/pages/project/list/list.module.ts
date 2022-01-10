import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { DetailsPageModule } from '../details/details.module'
import { LocalPageModule } from '../local/local.module';
const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,DetailsPageModule,LocalPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
