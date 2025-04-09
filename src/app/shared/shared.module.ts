import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
