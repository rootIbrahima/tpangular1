import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  myFaceSnap!:FaceSnap[];
  ngOnInit(): void {
    this.myFaceSnap=[
      new FaceSnap(
        "My first website",
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
