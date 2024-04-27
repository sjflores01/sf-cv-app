import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';
import { FormationComponent } from '../formation/formation.component';
import { WorkingExpComponent } from '../working-exp/working-exp.component';
import { AboutMeComponent } from '../about-me/about-me.component';

const fade = trigger('fade', [
  state('visible', style({opacity: 1})),
  state('hidden', style({opacity: 0})),
  transition('visible <=> hidden', animate('2s ease-in-out')),
])
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [fade],
    standalone: true,
    imports: [AboutMeComponent, WorkingExpComponent, FormationComponent, RouterLink]
})
export class HomeComponent implements OnInit {
  public showSideBar : boolean = false;
  public isVisible : boolean = false;
  ngOnInit(): void {
    setInterval(() => this.fadeInAnimation(),1000);
  }

  fadeInAnimation(): void {
    this.isVisible = this.isVisible ? false : true;
  }
}
