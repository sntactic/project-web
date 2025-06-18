import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizzCard } from '../templates/quizz-card';
import { QuizzCardComponent } from '../quizz-card/quizz-card.component';
import { QuizzCardService } from '../services/quizz-cards-services';
import { TopSideBareService } from '../services/top-side-bare-service';
import { CommonModule } from '@angular/common';
import { Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-quizzcard-list',
  imports: [
    QuizzCardComponent,
    CommonModule
  ],
  templateUrl: './quizzcard-list.component.html',
  styleUrl: './quizzcard-list.component.scss'
})
export class QuizzcardListComponent implements OnInit, OnDestroy{

  quizzCards!:QuizzCard[];

  constructor(private quizzCardService: QuizzCardService , private topSideBareService: TopSideBareService){}

  difficulte!:string;
  domaine!:string;
  private destroy$!: Subject<boolean>

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>()

    this.quizzCards = this.quizzCardService.getQuizzCards();
    this.topSideBareService.difficulte.subscribe(value =>{this.difficulte = value})
    this.topSideBareService.domaine.subscribe(value =>{this.domaine = value})

    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)
    // ).subscribe()
  }

  ngOnDestroy(): void {
      this.destroy$.next(true)
  }

}
