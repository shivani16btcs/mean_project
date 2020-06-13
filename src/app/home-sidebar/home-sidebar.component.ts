import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css']
})
export class HomeSidebarComponent implements OnInit {
uploadclick:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


  onUpload(){
    this.uploadclick=true;
  }
  
}
