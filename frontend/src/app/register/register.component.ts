import { Component, } from '@angular/core';
import { RegisterService } from '../shared/register.service';
import { NotificationService } from '../shared/notification.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formSubmitted: boolean = false;
  constructor(private registerService: RegisterService,
    private notifyService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void { }

  registerForm = this.formBuilder.group({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    termCheck: new FormControl(false, Validators.required)
  });

  get f() {
    return this.registerForm.controls;
  }


  /**
   * Function to check for error
   */
  hasError(type: string, key: string) {
    return this.formSubmitted && this.registerForm.hasError(type, [key]);
  }

  isStringContains(str, check) {
    if (check == 'number') {
      return /\d/.test(str);
    } else if (check == 'lowercase') {
      return (/[a-z]/.test(str));
    } else if (check === "uppercase") {
      return (/[A-Z]/.test(str));
    } else if (check === "special") {
      return (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str));
    }
  }

  registerUser() {
    this.formSubmitted = true;
    console.log(this.registerForm.valid)
    if (!this.registerForm.valid) {
      return
    }
    else {
      this.registerService.DoRegistration
        ({
          userName: this.registerForm.controls.userName.value,
          firstName: this.registerForm.controls.firstName.value,
          lastName: this.registerForm.controls.lastName.value,
          email: this.registerForm.controls.email.value,
          password: this.registerForm.controls.password.value
        }).subscribe(data => {
          this.notifyService.showSuccess("registered successfully !!");
          this.navigatetologin()
        }, (error) => {
          this.notifyService.showError("registeration failed !!");
        })
    }
  }

  navigatetologin() {
    this.router.navigate(['login']);
  }

}





