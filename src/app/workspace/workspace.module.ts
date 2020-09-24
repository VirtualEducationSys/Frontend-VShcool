import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ClassroomComponent } from './classroom/classroom.component';

@NgModule({
  declarations: [
    CockpitComponent,
    ClassroomComponent
  ],

  imports: [
    CommonModule,
    FlexLayoutModule,
    WorkspaceRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    SharedModule
  ],
  // providers: [
  //   {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}
  // ]
})
export class WorkspaceModule { }
