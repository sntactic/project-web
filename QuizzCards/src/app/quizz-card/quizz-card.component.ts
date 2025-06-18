import { Component , Input } from '@angular/core';
import { QuizzCard } from '../templates/quizz-card';
import { CommonModule, DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-quizz-card',
  imports: [
    NgStyle,
    DatePipe,
    CommonModule
  ],
  templateUrl: './quizz-card.component.html',
  styleUrl: './quizz-card.component.scss'
})
export class QuizzCardComponent {
  @Input() quizzCard!:QuizzCard;

  fliped = false 

  onfliped(){
    this.fliped = !this.fliped
    console.log(this.fliped)
  }
}
