import { Routes } from '@angular/router';
import { QuizzcardListComponent } from './quizzcard-list/quizzcard-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigleQuizzCardComponent } from './sigle-quizz-card /sigle-quizz-card.component';
import { MyCardsComponent } from './my-cards/my-cards.component';

export const routes: Routes = [
    {path:'quizzcards/:id', component:SigleQuizzCardComponent},
    {path:'quizzcards', component:QuizzcardListComponent},
    {path:'', component:LandingPageComponent},
    {path:'mycards', component:MyCardsComponent}

];
