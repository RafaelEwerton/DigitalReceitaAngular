import { Component, OnInit } from '@angular/core';


import { Farmacia } from '../farmacia'

@Component({
  selector: 'app-farmacias-form',
  templateUrl: './farmacias-form.component.html',
  styleUrls: ['./farmacias-form.component.css']
})
export class FarmaciasFormComponent implements OnInit {

  farmacia: Farmacia = new Farmacia;


  constructor() { }

  ngOnInit(): void {
  }

}
