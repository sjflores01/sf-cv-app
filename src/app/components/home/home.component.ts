import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';
import { FormationComponent } from '../formation/formation.component';
import { WorkingExpComponent } from '../working-exp/working-exp.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { animations } from 'src/app/classes/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: animations,
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
