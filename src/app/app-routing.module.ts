import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './principal/inicio/inicio.component';
import { EntrarComponent } from './usuario/entrar/entrar.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';



const routes: Routes = [
  {
    path: '',
    //component: EntrarComponent,
    
    children: [

      { path: '', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) }
    ]
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'**',
    redirectTo:  ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
