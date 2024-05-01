import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Content } from 'src/app/classes/content';

@Component({
    selector: 'app-working-exp',
    templateUrl: './working-exp.component.html',
    styleUrls: ['./working-exp.component.scss'],
    standalone: true
})
export class WorkingExpComponent implements OnInit{
  content : Content = new Content();
  constructor(@Inject(LOCALE_ID) public locale: string){}
  ngOnInit(): void {
    if (this.locale == 'es-AR') {
      this.content.Title = 'Experiencia';
    }
    else {
      this.content.Title = 'Working Experience';
    }
  }
}
