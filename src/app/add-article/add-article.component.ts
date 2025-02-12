import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {

  title:string ="";
  content:string ="";
  author:string="Moi";
  date:string="2025-02-12";
  type:string="article"
  

 @Output() submitfromaddarticle = new EventEmitter< { title: string; content: string; author: string; date: Date; type: string }>();

 recuperationArticle() {

  console.log('click')
  // ! Emmission de l'event custom avec counter dedans
  this.submitfromaddarticle.emit(
    {
      title: this.title,
      content: this.content,
      author: "moi",
      date: new Date('2023-01-01'),
      type: "article"
    });
}

}
