import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-one-friend',
  imports: [NgClass,NgStyle],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class  OneFriendComponent {

  Utilisateur: string = `Steven Cigale`;
  photo: string = `https://thispersondoesnotexist.com/`;
  uneData:string = `https://thispersondoesnotexist.com/`;
  Age: number = 25;
  Status: string =`Offline`;
  Bio: string = 'Steven cigale is a French Film producer, screenwriter and director. He is best known for his work in the 2000s and 2010s';
  currentDate: Date = new Date();
  passion: string[] = ['Volébol', 'Gun', 'Guitare'];
  Xss: string = `<script>alert("Hello, XSS H4CK3D !")</script>`;
  // Condition ternaire : 
   Reputation: string =`Ringard`;
  ResultReputation:string =  this.Reputation ? 'Ringard': 'Cool';
  oneFriendStyle:string = "OFF";
  // Constructor
  color1:string="brown";
  color2:string="blue";
  getColor():any{
    if(Math.random()>0.5){
      this.oneFriendStyle= "ON";
      console.log("ON")
      return "amiOn"
    }else {
      console.log("OFF")
      return "amiOff"

    }
  }

  changeBg(){
    if(this.oneFriendStyle=="ON"){
      return this.color1
    }else {
      return this.color2
    }
  }

  // Méthode appelée dans le template
  getAge(): number {
    return 25;
  }
}