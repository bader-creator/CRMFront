import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditcontactPage } from './editcontact.page';

const routes: Routes = [
  {
    path: '',
    component: EditcontactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditcontactPage]
})
export class EditcontactPageModule {}
