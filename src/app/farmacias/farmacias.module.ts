import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmaciasRoutingModule } from './farmacias-routing.module';
import { FarmaciasFormComponent } from './farmacias-form/farmacias-form.component';
import {FormsModule } from '@angular/forms';
import { FarmaciaListaComponent } from './farmacia-lista/farmacia-lista.component'


@NgModule({
  declarations: [
    FarmaciasFormComponent,
    FarmaciaListaComponent
  ],
  imports: [
    CommonModule,
    FarmaciasRoutingModule,
    FormsModule

  ], exports: [
    FarmaciasFormComponent,
    FarmaciaListaComponent

  ]
})
export class FarmaciasModule { }
