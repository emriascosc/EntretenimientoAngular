import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.traerNoticias()
  }

  traerNoticias(){
    this.noticiaService.obtenerNoticias().subscribe((noticia:any) =>{
      console.log(noticia)
    })
  }

}
