import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import{LoginComponent} from '../login/login.component'
@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
