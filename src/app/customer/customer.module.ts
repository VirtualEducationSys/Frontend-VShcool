import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class CustomerModule { }
