import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  signupForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{3,15}$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^.{6,}$/)
    ]),
  });

  get userName () {
    return this.signupForm.get('userName');
  }
  get password () {
    return this.signupForm.get('userName');
  }

}
