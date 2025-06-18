import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Router, RouterOutlet,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, filter, interval, map, tap, of, delay, mergeMap, take, concatMap, exhaustMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TopBarComponent,
    SideBarComponent,
    RouterOutlet,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit 
{
  currentRoute!: string;

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
  interval$!: Observable<string>

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  logger_appell(color:"rouge" | "jaune", trainIndex:number){
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  }

  logger_lumiere(color:"rouge"|"jaune"){
    console.log(`%c La lumiere s'allume en ${color}`, `color:${this.translateColor(color)}`);
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  } 

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    this.logger_appell(color, trainIndex)
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  ngOnInit(){

    // interval(500).pipe(
    //   take(10),

    //   map(value => value %2 === 0 ? `rouge` : `jaune`),

    //   tap(color => this.logger_lumiere(color)),

    //   exhaustMap(color => this.getTrainObservable$(color)),

    //   tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `text-decoration: underline; color: ${this.translateColor(train.color)}`))
    // ).subscribe();

  }

}
