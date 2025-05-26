import { Component, OnInit } from '@angular/core';
import { QuizzCard } from '../templates/quizz-card';
import { QuizzCardComponent } from '../quizz-card/quizz-card.component';
import { QuizzCardService } from '../services/quizz-cards-services';
import { TopSideBareService } from '../services/top-side-bare-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizzcard-list',
  imports: [
    QuizzCardComponent,
    CommonModule
  ],
  templateUrl: './quizzcard-list.component.html',
  styleUrl: './quizzcard-list.component.scss'
})
export class QuizzcardListComponent implements OnInit{

  quizzCards!:QuizzCard[];

  constructor(private quizzCardService: QuizzCardService , private topSideBareService: TopSideBareService){}

  difficulte!:string;
  domaine!:string;

  ngOnInit(): void {
    this.quizzCards = this.quizzCardService.getQuizzCards();
    this.topSideBareService.difficulte.subscribe(value =>{this.difficulte = value})
    this.topSideBareService.domaine.subscribe(value =>{this.domaine = value})
  }

}
