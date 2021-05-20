import { Component, OnInit } from '@angular/core';


import { Farmacia } from '../farmacia'
import { FarmaciasService } from '../../farmacias.service'
import {Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-farmacias-form',
  templateUrl: './farmacias-form.component.html',
  styleUrls: ['./farmacias-form.component.css']
 
})
export class FarmaciasFormComponent implements OnInit {

  farmacia: Farmacia;
  success: boolean = false;

  constructor( 
      private service: FarmaciasService, 
      private router: Router,
      private activatedRoute: ActivatedRoute
   ) { 
    this.farmacia = new Farmacia();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params
    console.log(params)
  }

  voltarParaListagem(){
    this.router.navigate(['/farmacias-lista'])


  }

  onSubmit(){
    this.service
      .salvar(this.farmacia)
      .subscribe(response => {
        this.success = true;
        this.farmacia = response;

    })


  }


}
