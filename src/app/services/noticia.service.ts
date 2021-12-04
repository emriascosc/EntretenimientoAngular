import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  baseURL=environment.baseURL;
  constructor(private http: HttpClient) { }

  //obtiene el valor del token que se encuentra almacenado dentro del localStorage
  //si el localStorage no contiene el valor buscando se devuelve un striing vacio

  getToken(){
    return localStorage.getItem("token") || '';
  }

 //método que construye la cabecera de la petición http, y envia los datos del token
  get headers(){
    return {headers: {"Authorization": this.getToken()}}
  }

  /**
   * 
   * Se debe enviar por la cabecera de la petición el token
   */
  obtenerNoticias(){
    return this.http.get(`${this.baseURL}/api/noticias`, this.headers)
  }
}
