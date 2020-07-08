import { Component, OnInit } from '@angular/core';
import {ForgetService} from '../shared/forget.service';
import { NotificationService } from '../shared/notification.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  constructor(
  private  forgetservice:ForgetService,
  private  notifyservice:NotificationService) { }

  ngOnInit(): void {
  }
  emailsend: boolean =false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  get f(){
    return this.form.controls;
  }



  Doforget(email) {
      this.forgetservice.forgetlink({
      email: email.value,
      }).subscribe(data => {
        this.emailsend=true;
      }, (error =>{
       this.notifyservice.showError("Invalid login");
        console.log(error);
      })
      )
  }

}
