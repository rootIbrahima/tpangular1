import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports:[
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  //title = 'tpAngular1';
  faceSnap!:FaceSnap;
  ngOnInit(): void {
    this.faceSnap=new FaceSnap(
    "Mon premier site",
    "Ceci est une plateforme de publication des photos",
    'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
    new Date(),
    0,
    )
  }
}
