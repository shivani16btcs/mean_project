import { Component, OnInit } from '@angular/core';
import {ForgetComponent}from '../forget/forget.component'
@Component({
  selector: 'app-forget-popup',
  templateUrl: './forget-popup.component.html',
  styleUrls: ['./forget-popup.component.css']
})
export class ForgetPopupComponent implements OnInit {

  constructor(
   private forgetcom:ForgetComponent,
  ) { }

  ngOnInit(): void {
  }
removepop(){
  this.forgetcom.emailsend=false;
}
}
