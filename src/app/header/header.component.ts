import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';
import {NotificationService} from '../shared/notification.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(//private login:LoginComponent,
    private router:Router,
    private notifyService: NotificationService
    ) { }

  ngOnInit(): void {
  }

  onlogout()
  {
  // this.login.userloggedin=false;
  // this.notifyService.showInfo("Logout ");
  // this.router.navigate(['login']);
   }

}
