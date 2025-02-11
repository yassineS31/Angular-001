import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  userName:string = "";
  btn:boolean= false;

  // checkInput(){
  //   console.log('btn clicked')
  //   // this.userName== null ? this.btn=false: this.btn=true;
  //   if(this.userName!=null){
  //     this.btn = true;
  //   }
  // }

  reset(){
    this.userName = "";
     this.userName== null ? this.btn=false: this.btn=true;
  }
}
