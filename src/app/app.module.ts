import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulo del cliente http
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './consumo/juego/juego.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { InicioComponent } from './principal/inicio/inicio.component';
import { ListarComponent } from './consumo/juego/listar/listar.component';
import { AgregarComponent } from './consumo/juego/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    EntrarComponent,
    RegistrarComponent,
    InicioComponent,
    ListarComponent,
    AgregarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, //Importamos el modulo para utilizarlo en el service
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
