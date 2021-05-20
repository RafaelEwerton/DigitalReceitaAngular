import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Farmacia } from './farmacias/farmacia';
import { Observable } from 'rxjs';  //aplicação reativa

@Injectable({
  providedIn: 'root'
})
export class FarmaciasService {

  constructor(private http: HttpClient) { }

  salvar(farmacia : Farmacia) : Observable<Farmacia> {  //requisição assincrona, observable serve para ter controle
    return this.http.post<Farmacia>('http://localhost:8080/api/farmacias', farmacia);

  }

    getFarmacias() : Observable<Farmacia[]> {
      return this.http.get<Farmacia[]>('http://localhost:8080/api/farmacias');
    }

}
