import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public showSideBar : boolean = true;
  public messageText : string = 'Hey Santiago! I saw your CV and wanted to get in touch with you.'
  @Output() onClickCollapseSideBar = new EventEmitter<any>();

  ngOnInit(): void {
    this.showSideBar = true;
  }
}
