import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmaciasFormComponent } from './farmacias-form/farmacias-form.component';



const routes: Routes = [
  {path : 'farmacias-form' , component: FarmaciasFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciasRoutingModule { }
