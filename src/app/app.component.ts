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
export class AppComponent  implements OnInit{
  myFaceSnap!:FaceSnap[];
  ngOnInit(): void {
    this.myFaceSnap=[
      new FaceSnap(
        "Mon premier site",
    "Ceci est une plateforme de publication des photos",
    'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
    new Date(),
    0,
      )
      ,
      new FaceSnap(
        "Mon deuxieme site",
      "Ceci est une plateforme de publication des videos",
      'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
      new Date(),
      0,
      ),
      new FaceSnap(
        "Mon troisieme site",
        "Ceci est une plateforme de publication des jeu",
         'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
        new Date(),
        0,
      ),

    ];
    this.myFaceSnap[0].setLocation("Dakar,Senegal");
    this.myFaceSnap[1].setLocation("Paris,France");
    this.myFaceSnap[2].setLocation("Washington,US");


  }  
      
  }

