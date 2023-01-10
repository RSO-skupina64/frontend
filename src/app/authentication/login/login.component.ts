import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let username = '';
    let password = '';

    this.loginForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.authenticationService.login(this.loginForm.value);
  }

}
