import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { Title } from '@angular/platform-browser';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],

  imports:[
    //FaceSnapComponent,
    FaceSnapListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  myFaceSnap!:FaceSnap[];
  
  }

