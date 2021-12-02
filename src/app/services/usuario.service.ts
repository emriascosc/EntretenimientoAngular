import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //representa localhost:8080
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) {}
    //cuando iniciamos sesion debemos suministrar los datos del formulario
    // esos datos deben ser enviados por la petición
    entrar(dato: any) {
      return this.http.post(`${this.baseURL}/api/usuarios/login`, dato)
    }
  
}



