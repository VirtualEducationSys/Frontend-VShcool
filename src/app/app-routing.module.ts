import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { SettingLayoutComponent } from './shared/layouts/setting-layout/setting-layout.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full',
  },
  {
    path:'',
    component: AuthLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path:'',
    component: MainLayoutComponent,
    children:[
      {
        path:'customers',
        loadChildren: './customer/customer.module#CustomerModule'
      },
      {
        path:'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path:'administration',
        loadChildren: './administration/administration.module#AdministrationModule'
        
      },
      {
        path:'workspace',
        loadChildren: './workspace/workspace.module#WorkspaceModule'
      }
    ]
  },
  { 
    path:'',
    component:SettingLayoutComponent,
    children: [
      {
        path:'settings',
        loadChildren: './settings/settings.module#SettingsModule'
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
