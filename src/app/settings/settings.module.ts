import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ProductSettingsComponent } from './product-settings/product-settings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [ProductSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    DeviceDetectorModule.forRoot()
  ]
})
export class SettingsModule { }
