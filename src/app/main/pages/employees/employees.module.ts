import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { MaterialModule } from '@modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatDatePipe } from '@pipes/format-date.pipe';
import { NotificationService } from '@services/notification.service';


@NgModule({
  declarations: [
    EmployeesComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    NotificationService
  ]
})
export class EmployeesModule { }
