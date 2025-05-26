import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzCardService } from '../services/quizz-cards-services';
import { QuizzCard } from '../templates/quizz-card';
import { QuizzCardComponent } from '../quizz-card/quizz-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sigle-quizz-card',
  imports: [
    QuizzCardComponent,
    CommonModule
  ],
  templateUrl: './sigle-quizz-card.component.html',
  styleUrl: './sigle-quizz-card.component.scss'
})
export class SigleQuizzCardComponent implements OnInit{
  constructor(private route:ActivatedRoute ,private quizzcardservice:QuizzCardService){}
  quizzCard!:QuizzCard;
  nbrCards!: number;
  QuizzCardid!: number;
  ngOnInit(): void {
      this.nbrCards = this.quizzcardservice.getQuizzCards().length
      this.QuizzCardid = this.route.snapshot.params['id']*1;
      const result= this.quizzcardservice.getQuizzCardId(this.QuizzCardid) 
      if(result !== ''){
        this.quizzCard = result
      }
  }
}
