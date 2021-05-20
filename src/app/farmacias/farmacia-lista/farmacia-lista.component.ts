import { Component, OnInit } from '@angular/core';
import { FarmaciasService } from 'src/app/farmacias.service';
import { Farmacia } from '../farmacia';
import { Router } from '@angular/router'

@Component({
  selector: 'app-farmacia-lista',
  templateUrl: './farmacia-lista.component.html',
  styleUrls: ['./farmacia-lista.component.css']
})
export class FarmaciaListaComponent implements OnInit {

  farmacias: Farmacia[] = []


  constructor(private service: FarmaciasService,
  private router: Router) {}


  ngOnInit(): void {
    this.service
    .getFarmacias()
    .subscribe( resposta => this.farmacias = resposta);

  }

    novoCadastro(){
      this.router.navigate(['/farmacias-form'])
    }

}
