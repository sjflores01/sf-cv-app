import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Santiago Flores';
  sections: SectionComponent[] = [
    // new SectionComponent('About Me'),
    // new SectionComponent('Working Experience')
  ]
}
