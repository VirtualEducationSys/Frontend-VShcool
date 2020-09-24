import { WorkspaceModule } from './workspace/workspace.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './authentication/authentication.module';
import { CustomerModule } from './customer/customer.module';
import { SettingsModule } from './settings/settings.module';
import { AdministrationModule } from './administration/administration.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    CustomerModule,
    DashboardModule,
    WorkspaceModule,
    SettingsModule,
    AdministrationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
