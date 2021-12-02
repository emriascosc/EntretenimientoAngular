import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Juego } from '../models/juego.model';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  url: string=environment.baseURL;

  //inyecto el cliente http
  constructor(private http: HttpClient) { }

  traerJuegos(){
    return this.http.get(`${this.url}/api/juegos`);
  }

  enviarJuegos(dato:any){
    return this.http.post(`${this.url}/api/juegos`,dato);
  }
  
}
