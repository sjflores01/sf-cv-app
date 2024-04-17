import { Component } from '@angular/core';
import { Content } from 'src/app/classes/content';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  content : Content = new Content('About Me', 
  "For more than four years I've been living my dream of working as a developer," +
  "performing as both Fullstack or Backend developer. Technology and innovation were always my passions," +
  "I really enjoy making life easy through automated processes.", '')
}