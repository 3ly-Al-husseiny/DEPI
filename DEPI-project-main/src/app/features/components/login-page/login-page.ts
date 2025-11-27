import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(' ', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(' ', {
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
  }

}
