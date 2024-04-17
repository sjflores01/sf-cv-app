import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() section: SectionComponent;
  name: string = '';
  constructor(@Inject(SectionComponent) section: SectionComponent){
    this.section = section
  }
}
