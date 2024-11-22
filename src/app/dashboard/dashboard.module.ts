import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    InicioComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    DecimalPipe, FormsModule,
  ]
})
export class DashboardModule { }
