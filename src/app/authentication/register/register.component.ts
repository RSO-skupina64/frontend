import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let username = '';
    let password = '';
    let repeatPassword = '';
    let name = '';
    let lastName = '';
    let email = '';

    this.registerForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required),
      'repeat_password': new FormControl(repeatPassword, Validators.required),
      'name': new FormControl(name, Validators.required),
      'last_name': new FormControl(lastName, Validators.required),
      'email': new FormControl(email, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.registerForm.value)
    this.authenticationService.register(this.registerForm.value);
  }

}
