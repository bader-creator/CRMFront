import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArchivePage } from './archive.page';
import { DetailsoppPageModule } from '../../crm/detailsopp/detailsopp.module';

const routes: Routes = [
  {
    path: '',
    component: ArchivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,DetailsoppPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArchivePage]
})
export class ArchivePageModule {}
