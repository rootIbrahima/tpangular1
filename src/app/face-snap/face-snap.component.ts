import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!:string;
  description!:string;
  createdAt!:Date;
  snaps!:number;
  imageUrl:string |undefined;

  ngOnInit(): void {
    this.title="My title facesnap";
    this.description="My description facesnap";
    this.createdAt=new Date();
    this.snaps=10;
    this.imageUrl = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg';
  }

}
