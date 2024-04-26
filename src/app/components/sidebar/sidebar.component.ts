import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public showSideBar : boolean = true;
  @Output() onClickCollapseSideBar = new EventEmitter<any>();

  ngOnInit(): void {
    this.showSideBar = true;
  }
  
  collapseSideBar(){
    this.showSideBar = false;
    this.onClickCollapseSideBar.emit(this.showSideBar);
  }
}
