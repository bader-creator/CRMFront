import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFilterPage } from './pages/modal/search-filter/search-filter.page';
import { FormationComponent } from './pages/formation/formation.component';
import { AllcontactComponent } from './pages/allcontact/allcontact.component';
import { NewformationComponent } from './newformation/newformation.component';
import { AllformationComponent } from './allformation/allformation.component';
import {AuthGuard} from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' ,  },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule'  , },
 // { path: 'detailcontact/:id', loadChildren: './pages/contacts/detailcontact/detailcontact.module#DetailcontactPageModule',  },
 { path: 'listformations', loadChildren: './pages/formations/listformations/listformations.module#ListformationsPageModule',  },
// { path: 'detailformations', loadChildren: './pages/formations/listformations/listformations.module#ListformationsPageModule',  },
 //{ path: 'newformations', loadChildren: './pages/formations/newformation/newformation.module#NewformationPageModule',  },
 //  { path: 'viewformation/:id', loadChildren: './pages/formations/viewformation/viewformation.module#ViewformationPageModule',  },
 { path: 'editformation/:id', loadChildren: './pages/formations/editformation/editformation.module#EditformationPageModule',  },

  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' ,   },
  { path: 'listcontacts', loadChildren: './pages/contacts/listcontacts/listcontacts.module#ListcontactsPageModule',  },
  { path: 'newcontact', loadChildren: './pages/contacts/newcontact/newcontact.module#NewcontactPageModule',  },
  { path: 'editcontact/:id', loadChildren: './pages/contacts/editcontact/editcontact.module#EditcontactPageModule',  },


  { path: 'listopp', loadChildren: './pages/opportunities/listopp/listopp.module#ListoppPageModule' },
  { path: 'newopp', loadChildren: './pages/opportunities/newopp/newopp.module#NewoppPageModule' },
  { path: 'pipeline', loadChildren: './pages/opportunities/pipeline/pipeline.module#PipelinePageModule' },
  { path: 'archive', loadChildren: './pages/opportunities/archive/archive.module#ArchivePageModule' },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },
  { path: 'localisation', loadChildren: './pages/localisation/localisation.module#LocalisationPageModule' },
  { path: 'listproj', loadChildren: './pages/project/list/list.module#ListPageModule' },
  { path: 'detailsproj', loadChildren: './pages/project/details/details.module#DetailsPageModule' },

  { path: 'soumdetails', loadChildren: './pages/soumission/soumdetails/soumdetails.module#SoumdetailsPageModule' },
  { path: 'soumissionlist', loadChildren: './pages/soumission/soumissionlist/soumissionlist.module#SoumissionlistPageModule' },
  { path: 'local', loadChildren: './pages/project/local/local.module#LocalPageModule' },
  //{ path: 'localisation', loadChildren: './pages/project/localisation/localisation.module#LocalisationPageModule' },
  //{ path: 'negencours', loadChildren: './pages/crm/pipelinesteps/negencours/negencours.module#NegencoursPageModule' },
  //{ path: 'rendezvous', loadChildren: './pages/crm/pipelinesteps/rendezvous/rendezvous.module#RendezvousPageModule' },
  //{ path: 'suivi', loadChildren: './pages/crm/pipelinesteps/suivi/suivi.module#SuiviPageModule' },
  //{ path: 'contatc', loadChildren: './pages/crm/pipelinesteps/contatc/contatc.module#ContatcPageModule' },
  //{ path: 'prospectid', loadChildren: './pages/crm/pipelinesteps/prospectid/prospectid.module#ProspectidPageModule' },
 //{ path: 'pipelinestep', loadChildren: './pages/crm/pipelinestep/pipelinestep.module#PipelinestepPageModule' },
  //{ path: 'prospectid', loadChildren: './pages/crm/pipelinesteps/prospectid/prospectid.module#ProspectidPageModule' },
  //{ path: 'contatc', loadChildren: './pages/crm/pipelinesteps/contatc/contatc.module#ContatcPageModule' },
  //{ path: 'suivi', loadChildren: './pages/crm/pipelinesteps/suivi/suivi.module#SuiviPageModule' },
  //{ path: 'rendezvous', loadChildren: './pages/crm/pipelinesteps/rendezvous/rendezvous.module#RendezvousPageModule' },
  //{ path: 'negencours', loadChildren: './pages/crm/pipelinesteps/negencours/negencours.module#NegencoursPageModule' },
//  { path: 'newopp', loadChildren: './pages/crm/newopp/newopp.module#NewoppPageModule' },
  //{ path: 'detailsopp', loadChildren: './pages/crm/detailsopp/detailsopp.module#DetailsoppPageModule' },
  //{ path: 'pipeline', loadChildren: './pages/crm/pipeline/pipeline.module#PipelinePageModule' },
 // { path: 'opppipeline', loadChildren: './pages/crm/opppipeline/opppipeline.module#OpppipelinePageModule' },
  //{ path: 'archive', loadChildren: './pages/crm/archive/archive.module#ArchivePageModule' },
 // { path: 'newformation', loadChildren: './pages/formations/newformation/newformation.module#NewformationPageModule' },
 // { path: 'detailsformation', loadChildren: './pages/formations/detailsformation/detailsformation.module#DetailsformationPageModule' }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
