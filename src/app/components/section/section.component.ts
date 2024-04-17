import { Component, Input } from '@angular/core';
import { Content } from 'src/app/classes/content';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() content : Content = new Content('','');

}
