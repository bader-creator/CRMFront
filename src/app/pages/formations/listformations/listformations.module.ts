import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../../services/auth/auth.guard';




import { IonicModule } from '@ionic/angular';

import { ListformationsPage } from './listformations.page';

const routes: Routes = [
  {
    path: '',
    component: ListformationsPage , 
    children : [
         {
          path :'list', 
          loadChildren: '../detailsformation/detailsformation.module#DetailsformationPageModule'
         }
          ,
    
        {
          path :'new', 
          loadChildren: '../newformation/newformation.module#NewformationPageModule'         
        }
        ,
        {
          path: '',
          redirectTo: '/listformations/list',
          pathMatch: 'full'
        }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListformationsPage]
})
export class ListformationsPageModule {}
