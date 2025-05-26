import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-cevice';
import { TopSideBareService } from '../services/top-side-bare-service';

@Component({
  selector: 'app-side-bar',
  imports: [
    NgClass
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit{
  side_bar!:boolean
  constructor(private menuServiceClique: HeaderService , private topSideBareService: TopSideBareService){};

  ngOnInit(): void {
    this.side_bar = false;
    this.menuServiceClique.onclique$.subscribe(value => {this.side_bar = value});
  }

  setDifficulte(option: string){
    this.topSideBareService.setDifficulte(option);
  }

  setDomaine(option: string){
    this.topSideBareService.setDomaine(option);
  }
  
}
