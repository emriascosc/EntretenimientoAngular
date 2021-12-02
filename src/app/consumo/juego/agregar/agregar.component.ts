import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Juego } from 'src/app/models/juego.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //creamos un grupo de formulario
  JuegoForm!: FormGroup;

  @Output() onNuevoJuego: EventEmitter<Juego> = new EventEmitter();

  //crear un atributo para construir el formulario
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.JuegoForm=this.fb.group({
      id: [''],
      nombre: ['']
    })
  }
  enviar(){
    console.log(this.JuegoForm.value);
    this.onNuevoJuego.emit(this.JuegoForm.value)
  }
}
