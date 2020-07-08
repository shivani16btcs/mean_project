import { Component, OnInit } from '@angular/core';
import { ForgetService } from '../shared/forget.service';
import { ResetService } from '../shared/reset.service';
import { Router, ActivatedRoute,  } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  CurrentState: any;
  resetToken: null;
  notSame: false;
  constructor(
    private notifyService: NotificationService,
    private resetservice: ResetService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      this.resetToken = params.token;
      console.log(this.resetToken);
    });
  }

  ngOnInit(): void {
  };

  form = new FormGroup({
    password: new FormControl('', Validators.required),
    Cpassword: new FormControl('', Validators.required),
  });
  get f() {
    return this.form.controls;
  }




  onreset(password, Cpassword) {
    if (
      password.value == '' || Cpassword.value == '') {
      this.notifyService.showWarning(" all required field must be field");
    }
    else if (password.value !== Cpassword.value) {
      this.notifyService.showError("password and confirm password must be same !!");
    }
    else {
      this.resetservice.resetpassword({
        password: password.value,
        resetpasswordtoken: this.resetToken
      }).subscribe(data => {
        this.notifyService.showSuccess(" password reset sucessfully");
        this.router.navigate(['login']);

      }, (error => {
        this.notifyService.showError("something went wrong");
        console.log(error);
      })
      )
    }
  }
}
