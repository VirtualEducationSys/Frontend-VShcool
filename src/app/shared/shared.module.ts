
import { MatFormFieldModule } from '@angular/material/form-field';

import { GenericListComponent } from './generic-list/generic-list.component';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SettingLayoutComponent } from './layouts/setting-layout/setting-layout.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreadcrumbModule} from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FeatureComponent } from './feature/feature.component';
import { LandingComponent } from './landing/landing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CourseSchemaComponent } from './course-schema/course-schema.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
//import { FeatureComponent } from './feature/feature.component';
//import { LandingComponent } from './landing/landing.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent,
    GenericListComponent,
    SettingLayoutComponent,
    BreadcrumbComponent,
    LandingComponent,
    FeatureComponent,
    CourseSchemaComponent,
    CourseViewerComponent
  ],
  exports: [
    MainLayoutComponent,
    AuthLayoutComponent,
    GenericListComponent,
    BreadcrumbComponent,
    LandingComponent,
    FeatureComponent,
    CourseSchemaComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    RouterModule,
    MatExpansionModule,
    MatGridListModule,
    MatFormFieldModule,
    BreadcrumbModule,
    FlexLayoutModule,
    MatTreeModule,
    MatCheckboxModule,
    MatMenuModule
  ]
})
export class SharedModule { }
 