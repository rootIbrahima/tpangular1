import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
 
  @Input() faceSnapUpdate!:FaceSnap;
  snapButtonText!:string;
  userHasSnapped= false;

  ngOnInit(): void {
    
    //this.imageUrl = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg';
    this.snapButtonText="liked";
  }
  onSnap():void{
   if (this.userHasSnapped){
    this.unSnap();
    }
    else{
    this.snap();
    }
   }
    unSnap() {
      this.faceSnapUpdate.removeSnap()
      this.snapButtonText='unliked';
      this.userHasSnapped = false;
    }
    snap() {
      this.faceSnapUpdate.addSnap()
      this.snapButtonText ='liked';
      this.userHasSnapped = true;
    }
  }



