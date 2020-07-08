import { Component, OnInit } from "@angular/core";
import { LoginService } from "../shared/login.service";
import { NotificationService } from "../shared/notification.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userloggedin:boolean=false;
  constructor(
    private loginservice: LoginService,
    private notifyservice: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });
  get f() {
    return this.form.controls;
  }

  loginUser(email, password) {
    this.loginservice
      .DoLogin({
        email: email.value,
        password: password.value,
      })
      .subscribe((data) => {
        this.userloggedin=true;
        this.notifyservice.showSuccess("Login successfully !!");
        console.log(data);
        this.router.navigate(["home"]);
      },
      (error) => {
        this.notifyservice.showError("Invalid login");
        console.log(error);
      });
  }

  navigatetoregister() {
    this.router.navigate(["register"]);
  }

  navigatetoforget() {
    this.router.navigate(["forget"]);
  }
}





