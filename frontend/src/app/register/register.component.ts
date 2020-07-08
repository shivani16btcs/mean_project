import { Component,} from '@angular/core';
import {RegisterService} from '../shared/register.service';
import { NotificationService } from '../shared/notification.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private registerService:RegisterService,
    private notifyService : NotificationService,
    private router:Router) { }


  ngOnInit(): void {}

  form = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    Cpassword:new FormControl('', Validators.required),
    firstname:new FormControl('', Validators.required),
    lastname:new FormControl('', Validators.required),
    termscheck:new FormControl('',Validators.required),
  });
  get f(){
    return this.form.controls;
  }

  registerUser(Username ,email, password,Cpassword,firstname, lastname) {
    if(password.value!==Cpassword.value)
    {
      this.notifyService.showError("password and confirm password must be same !!");
    }
    else
    {
    this.registerService.DoRegistration
    ({
      userName:Username.value,
      firstName: firstname.value,
      lastName: lastname.value,
      email: email.value,
      password: password.value
    }).subscribe(data => {
        this.notifyService.showSuccess("registered successfully !!");
      console.log(data);
      this.router.navigate(['login']);
    },( error) => {
      this.notifyService.showError("registeration failed !!");
      console.log(error);
    },)
    }
  }

  navigatetologin(){
    this.router.navigate(['login']);
  }

}





