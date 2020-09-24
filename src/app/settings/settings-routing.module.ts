
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSettingsComponent } from './product-settings/product-settings.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component: CockpitComponent
  // },
  // {
  //   path: 'cockpit',
  //   component:CockpitComponent
  // },
  // {
  //   path: 'product-settings',
  //   component:ProductSettingsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
