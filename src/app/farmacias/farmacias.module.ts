import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmaciasRoutingModule } from './farmacias-routing.module';
import { FarmaciasFormComponent } from './farmacias-form/farmacias-form.component';


@NgModule({
  declarations: [
    FarmaciasFormComponent
  ],
  imports: [
    CommonModule,
    FarmaciasRoutingModule
  ], exports: [
    FarmaciasFormComponent

  ]
})
export class FarmaciasModule { }
