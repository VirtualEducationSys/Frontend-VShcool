import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashLandingComponent } from './dash-landing/dash-landing.component';


@NgModule({
  declarations: [DashboardComponent, DashLandingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
