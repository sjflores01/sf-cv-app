import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Content } from 'src/app/classes/content';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: true
})
export class AboutMeComponent implements OnInit {
  content : Content = new Content();
  constructor(@Inject(LOCALE_ID) public locale: string){}
  ngOnInit(): void {
    if (this.locale == 'es-AR') {
      this.content.Title = 'Sobre Mí';
      this.content.Text = "Desde hace 4 años me encuentro viviendo mi sueño de trabajar como programador, trabajando en una amplia variedad de proyectos tanto como Fullstack o Backend Developer. Siempre fui un apasionado de la tecnología y de la innovación, disfruto mucho de automatizar procesos y así facilitar la vida de las personas.";
    }
    else 
    {
      this.content.Title = 'About Me';
      this.content.Text = "For more than four years I've been living my dream of working as a developer, performing as both Fullstack or Backend developer. Technology and innovation were always my passions, I really enjoy making life easy through automated processes.";
    }
  }
}



