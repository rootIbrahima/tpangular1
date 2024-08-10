import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  myFaceSnap!:FaceSnap[];
  constructor(private faceSnapService:FaceSnapService){}
  ngOnInit(): void {
    this.myFaceSnap= this.faceSnapService.getFaceSnaps();

    this.myFaceSnap[0].setLocation("Dakar,Senegal");
    this.myFaceSnap[1].setLocation("Paris,France");
    this.myFaceSnap[2].setLocation("Washington,US");


  }  
      

}
