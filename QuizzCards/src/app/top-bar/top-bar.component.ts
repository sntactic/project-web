import { Component } from '@angular/core';
import { TopSideBareService } from '../services/top-side-bare-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  constructor(private topSideBareService: TopSideBareService,private routeur:Router){};

  setDifficulte(option: string){
    this.topSideBareService.setDifficulte(option);
  }

  setDomaine(option: string){
    this.topSideBareService.setDomaine(option);
  }

  onCommencer(){
    this.routeur.navigateByUrl('')
  }

}
