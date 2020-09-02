import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListoppPage } from './listopp.page';
import { DetailsoppPage } from '../../crm/detailsopp/detailsopp.page';
import { DetailsoppPageModule } from '../../crm/detailsopp/detailsopp.module';

const routes: Routes = [
  {
    path: '',
    component: ListoppPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,DetailsoppPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListoppPage]
})
export class ListoppPageModule {}
