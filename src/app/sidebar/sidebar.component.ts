import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  opened = true;
  open = false;
  @Input() open1 :boolean;
 
  
  constructor() { }

  ngOnInit(): void {
   
  }

  toggerSideBar(){
    this.opened = !this.opened;
  }
  toggerLogin(){
   this.open = !this.open;
  }

  

}
