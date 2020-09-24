import { StaffComponent } from './staff/staff.component';
import { SupplyComponent } from './supply/supply.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { StudentComponent } from './student/student.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassroomComponent } from './classroom/classroom.component';


const routes: Routes = [
  { path: '', data: { breadcrumb: "Administration" }, component:AdminLandingComponent },
  { path: 'student', data: { breadcrumb: "Etudiant" }, component: StudentComponent },
  { path: 'staff', data: { breadcrumb: "Personnel" }, component: StaffComponent },
  { path: 'classroom', data: { breadcrumb: "Salle" }, component: ClassroomComponent },
  { path: 'timesheet', data: { breadcrumb: "Planification" }, component: TimesheetComponent },
  { path: 'supply', data: { breadcrumb: "Fournitures" }, component: SupplyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
