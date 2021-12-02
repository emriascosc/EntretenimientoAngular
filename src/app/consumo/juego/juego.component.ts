import { Component, OnInit } from '@angular/core';

//importo el modelo
import { Juego } from 'src/app/models/juego.model';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  //Array que contiene la información traida del servidor
  juegos:Juego[]=[];


  //inyectar el servicio creado
  constructor(private serviceJuego: JuegoService) { }

  ngOnInit(): void {
    this.traerJuegos();


  }

  //crear un método que me ejecute el service
  traerJuegos(){
    this.serviceJuego.traerJuegos().subscribe((data: any) =>{
      //alert(data);
      this.juegos=data;
      //console.log(data);
    })
  }

  guardar(dato:Juego){
    this.serviceJuego.enviarJuegos(dato).subscribe((data: any) =>{
      console.log(data);
      this.traerJuegos()
    })
  }

}
