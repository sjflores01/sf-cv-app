import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('visible', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('visible <=> hidden', animate('2s ease-in-out')),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Santiago Flores';
  public screenWidth : any;
  public screenHeight : any;
  public showSideBar : boolean = false;
  public isVisible : boolean = false;
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    document.documentElement.style.setProperty('--height-size', String(this.screenHeight) + "px");
    document.documentElement.style.setProperty('--width-size', String(this.screenWidth) + "px");

    setInterval(() => this.fadeInAnimation(),2000);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    document.documentElement.style.setProperty('--height-size', String(this.screenHeight) + "px");
    document.documentElement.style.setProperty('--width-size', String(this.screenWidth) + "px");
  }

  sideButtonClick(): void {
    console.log(this.showSideBar);
    if (this.showSideBar) {
      this.showSideBar = false;
    }
    else {
      this.showSideBar = true;
    }
  }

  fadeInAnimation(): void {
    this.isVisible = this.isVisible ? false : true;
  }
}
