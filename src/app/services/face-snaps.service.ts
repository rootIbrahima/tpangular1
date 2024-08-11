import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn:"root"
})
export class FaceSnapService{
    private monFaceSnap:FaceSnap[]=[
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
      getFaceSnaps():FaceSnap[]{
        return[...this.monFaceSnap];
      }
      
      snapFaceSnapById(faceSnapId: string,snapType:SnapType):void{
        const foundFaceSnap = this.monFaceSnap.find(faceSnap =>
            faceSnap.id === faceSnapId);
                if (!foundFaceSnap){
                    throw new Error('FaceSnap not found');
                    }
                    foundFaceSnap.mySnap(snapType);
                }
}