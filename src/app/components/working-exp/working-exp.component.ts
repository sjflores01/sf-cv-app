import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/classes/content';

@Component({
  selector: 'app-working-exp',
  templateUrl: './working-exp.component.html',
  styleUrls: ['./working-exp.component.scss']
})
export class WorkingExpComponent implements OnInit{
  content : Content = new Content();
  ngOnInit(): void {
    this.content.Title = 'Working Experience';
  }
}
