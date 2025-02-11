import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
 listfriends:boolean =false;

//  constructor(){
//   setTimeout(()=>{
//     this.listfriends=true;},3000);
//   }
dataInput:string = '';
 capterEvent($event:any){
  this.dataInput=$event.target.value;
}

/*   
Version avec HTMLInputElement :

 capterEvent($event:HTMLInputElement){
  this.dataInput=$event.value;
}

*/

message:string = "";

ajouterAmi(){
  this.message ="Utilisateur ajouté avec succès"
  
}

 }

 
