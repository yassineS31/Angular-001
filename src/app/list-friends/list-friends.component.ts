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
dataInput:any = '';
 capterEvent($event:Event){
   this.dataInput+= $event.target;
  return (this.dataInput.target.value)
}
 }
