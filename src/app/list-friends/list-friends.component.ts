import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent,CommonModule],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
 listfriends:boolean =false;

//  constructor(){
//   setTimeout(()=>{
//     this.listfriends=true;},3000);
//   }
dataInput:string = 'Aucun ami';
 capterEvent($event:any){
  this.dataInput=$event.target.value;
}

/*   
Version avec HTMLInputElement :

 capterEvent($event:HTMLInputElement){
  this.dataInput=$event.value;
}

*/

message:boolean=true;

 ajouterAmi(){
//   this.message ="Utilisateur "+ this.dataInput +" ajouté avec succès"
this.message=false;
  return "Utilisateur "+ this.dataInput +" ajouté avec succès";
 }

 }

 
