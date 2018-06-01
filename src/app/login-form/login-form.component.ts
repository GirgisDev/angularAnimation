import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm;
  constructor(form: FormBuilder) {
    this.loginForm = form.group({
      userName: ['', [
        Validators.required,
        Validators.pattern(/^[\s\S]{4,40}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^.{6,}$/)
      ]]
    })
  };

  login () {
    console.log(this.loginForm.value)
    // alert('something!')
  }
}
