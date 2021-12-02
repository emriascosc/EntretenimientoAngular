import { Component, OnInit, Input } from '@angular/core';
import { Juego } from 'src/app/models/juego.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @Input("dato") juegos:Juego[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
