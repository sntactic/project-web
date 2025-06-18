import { Component, OnInit } from '@angular/core';
import { QuizzCardService } from '../services/quizz-cards-services';
import { QuizzCard } from '../templates/quizz-card';
import { QuizzCardComponent } from '../quizz-card/quizz-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-cards',
  imports: [
    QuizzCardComponent,
    CommonModule
  ],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.scss'
})
export class MyCardsComponent implements OnInit{
  quizzCards!:QuizzCard[];
  constructor(private quizzCardService: QuizzCardService ){}
  ngOnInit(): void {
    this.quizzCards = this.quizzCardService.getQuizzCards();
  }
}
