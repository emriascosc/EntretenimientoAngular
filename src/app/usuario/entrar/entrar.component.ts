import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  //definición del formulario
  loginForm!: FormGroup;

  //inyectar la construcción del formulario y el servicio del usuario
  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router:Router) { }

  //construir el formulario
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    })
  }
  //se ejecuta cuando activamos el botón ingresar
  entrar(){
    //console.log(this.loginForm.value)
    this.usuarioService.entrar(this.loginForm.value).subscribe((data:any) =>{
      console.log(data);
      if(data.mensaje=="Accedió correctamente"){
        this.router.navigateByUrl('inicio')
      }
      else{
        (data.mensaje)
      }
    })
  }

}
