import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  reproducir() {
    const audio = new Audio('assets/Hola.mp3');
    audio.play();
}

  constructor() { }

  ngOnInit(): void {
  }

}
