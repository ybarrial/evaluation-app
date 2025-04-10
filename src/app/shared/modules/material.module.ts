import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatSidenavModule
  ],
  exports: [
    MatCardModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
