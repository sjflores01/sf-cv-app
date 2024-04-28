import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { animations } from 'src/app/classes/animations';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [SkillsComponent],
    animations: [animations]
})
export class SidebarComponent implements OnInit {
  public showSideBar : boolean = true;
  public messageText : string = 'Hey Santiago! I saw your CV and wanted to get in touch with you.'
  @Output() onClickCollapseSideBar = new EventEmitter<any>();

  ngOnInit(): void {
    this.showSideBar = true;
  }
}
