import { ClassroomComponent } from './classroom/classroom.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CockpitComponent } from './cockpit/cockpit.component';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: "Workspace"
    },
    component:CockpitComponent
  },
  {
    path: 'classroom',
    pathMatch: 'full',
    data: {
      breadcrumb: "Salle"
    },
    component: ClassroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
