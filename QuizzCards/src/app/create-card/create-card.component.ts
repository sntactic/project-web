import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-card',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.scss'
})

export class CreateCardComponent {
  categories!:string;
  difficulte!:string;
  question!:string;
  reponse!:string;
  description!:string;

  onSubmit(form : NgForm){
    console.log("methode1")
    console.log(this.categories)
    console.log(this.difficulte)
    console.log(this.question)
    console.log(this.reponse)
    console.log(this.description)
    console.log()
    console.log("methode 2")
    console.log(form.value['reponse'])
  }
}
