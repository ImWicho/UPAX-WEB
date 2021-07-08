import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { MaterialModule } from '@modules/material.module';
import { NotificationService } from '@services/notification.service';


@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MaterialModule
  ],
  providers: [
    NotificationService
  ]
})
export class GroupsModule { }
