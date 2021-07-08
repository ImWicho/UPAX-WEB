import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@modules/material.module';

import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToolbarComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    LoadingComponent,
  ]
})
export class SharedComponentsModule { }
