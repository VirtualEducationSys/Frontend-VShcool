import { MomentDateModule } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { StudentComponent } from './student/student.component';
import { SharedModule } from '../shared/shared.module';
import { ClassroomComponent } from './classroom/classroom.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { SupplyComponent } from './supply/supply.component';
import { StaffComponent } from './staff/staff.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AdminLandingComponent, 
    StudentComponent, 
    ClassroomComponent, 
    TimesheetComponent, 
    SupplyComponent, 
    StaffComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MomentDateModule,
    MatTabsModule
  ]
})
export class AdministrationModule { }
