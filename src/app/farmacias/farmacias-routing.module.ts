import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmaciaListaComponent } from './farmacia-lista/farmacia-lista.component';
import { FarmaciasFormComponent } from './farmacias-form/farmacias-form.component';



const routes: Routes = [
  {path : 'farmacias-form' , component: FarmaciasFormComponent},
  {path : 'farmacias-lista' , component: FarmaciaListaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciasRoutingModule { }
