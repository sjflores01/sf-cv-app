import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { Content } from 'src/app/classes/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Santiago Flores';
  sections : Content[] = [
  new Content('Working Experience', 
    "For more than four years I've been living my dream of working as a developer," +
    "performing as both Fullstack or Backend developer. Technology and innovation were always my passions," +
    "I really enjoy making life easy through automated processes."),
  new Content('Formation', 
    "For more than four years I've been living my dream of working as a developer," +
    "performing as both Fullstack or Backend developer. Technology and innovation were always my passions," +
    "I really enjoy making life easy through automated processes."),
  new Content('Tools', 
    "For more than four years I've been living my dream of working as a developer," +
    "performing as both Fullstack or Backend developer. Technology and innovation were always my passions," +
    "I really enjoy making life easy through automated processes.")
  ]
}
