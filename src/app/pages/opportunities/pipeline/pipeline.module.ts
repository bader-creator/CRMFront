import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DetailsoppPageModule } from '../../crm/detailsopp/detailsopp.module';

import { IonicModule } from '@ionic/angular';

import { PipelinePage } from './pipeline.page';

const routes: Routes = [
  {
    path: '',
    component: PipelinePage
  }
];

@NgModule({
  imports: [
    CommonModule,DetailsoppPageModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PipelinePage]
})
export class PipelinePageModule {}
