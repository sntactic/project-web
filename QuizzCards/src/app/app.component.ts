import {Component} from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Router, RouterOutlet,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

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
export class AppComponent //implements AfterViewInit
{
  currentRoute!: string;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
  
}
