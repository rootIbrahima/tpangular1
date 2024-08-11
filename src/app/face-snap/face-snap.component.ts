import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,DatePipe,TitleCasePipe,LowerCasePipe,UpperCasePipe,DecimalPipe,CurrencyPipe,PercentPipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {

  myPrice=336.15;
  myLargeNumber=4667916.76;
  myLargeNumberPercentage=0.337;

 
  @Input() faceSnapUpdate!:FaceSnap;
  snapButtonText!:string;
  userHasSnapped!:boolean;

  constructor(private faceSnapService:FaceSnapService){}

  ngOnInit(): void {
    
    //this.imageUrl = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg';
    this.snapButtonText="liked";
    this.userHasSnapped=false;
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
      //this.faceSnapUpdate.removeSnap()
      this.faceSnapService.snapFaceSnapById(this.faceSnapUpdate.id,"unsnap");
      this.snapButtonText  = "unliked" ;
      this.userHasSnapped = false ;
    
    }
    snap() {
      //this.faceSnapUpdate.addSnap()
      this.faceSnapService.snapFaceSnapById(this.faceSnapUpdate.id,"snap");
      this.snapButtonText  = "liked" ;
      this.userHasSnapped = true   ; 
    
    }
    

  }


