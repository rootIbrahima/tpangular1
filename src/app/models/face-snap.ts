export class FaceSnap{

    myCurrency!:number
    
   
    location?:string

    constructor(public title:string,public description:string,public imageUrl:string,public createdAt:Date,public snap:number){}
    addSnap():void{
        this.snap++;
       }

    removeSnap():void{
        this.snap--;
    }
    setLocation(location?:string):void{
        this.location=location;
    }


}