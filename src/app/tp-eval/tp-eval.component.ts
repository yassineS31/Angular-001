import { Component } from '@angular/core';
import { NgClass,NgIf,NgStyle,NgFor } from '@angular/common';
@Component({
  selector: 'app-tp-eval',
  imports: [NgClass,NgStyle,NgIf,NgFor],
  templateUrl: './tp-eval.component.html',
  styleUrl: './tp-eval.component.css'
})
export class TPEVALComponent {
  bool:boolean = true;
  text:string="Si tu clique je pars !" ;
  Tab = [''];
  index:string="0";
  ClickButton(){
    // debug
    console.log(this.bool);
    this.bool= !this.bool;
    console.log(this.bool);
    console.log('Contenu du tableau : ',this.Tab )
    this.Tab.push(this.index)
    console.log('Contenu du tableau apres push : ',this.Tab )
  }

  // count():string{
  //   if(this.Tab.length>= 5){
  //     return "blueClass";
  //   }
  // }

 

  color1:string="blue"

  }

