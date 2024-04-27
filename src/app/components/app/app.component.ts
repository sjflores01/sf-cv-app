import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
  public screenWidth : any;
  public screenHeight : any;
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    document.documentElement.style.setProperty('--height-size', String(this.screenHeight) + "px");
    document.documentElement.style.setProperty('--width-size', String(this.screenWidth) + "px");
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    document.documentElement.style.setProperty('--height-size', String(this.screenHeight) + "px");
    document.documentElement.style.setProperty('--width-size', String(this.screenWidth) + "px");
  }
}
