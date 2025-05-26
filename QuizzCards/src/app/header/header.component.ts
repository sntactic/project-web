import { NgClass } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { HeaderService } from '../services/header-cevice';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private menuService: HeaderService){};

  img_menue !: string;
  menu!:boolean;

  ngOnInit(): void {
    this.img_menue = 'assets/menu.png';
    this.menu = false  
  }

  onClique(){
    this.menu = !this.menu;
    this.menuService.setClique(this.menu);
    if(this.menu){
      this.img_menue = 'assets/croix.png';
    }else{
      this.img_menue = 'assets/menu.png';
    }
  }
}
