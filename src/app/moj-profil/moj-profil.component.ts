import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication/authentication.service";
import {UserDetailsResponse} from "../models/user-details.model";

@Component({
  selector: 'app-moj-profil',
  templateUrl: './moj-profil.component.html',
  styleUrls: ['./moj-profil.component.css']
})
export class MojProfilComponent implements OnInit {
  updateProfileForm: FormGroup;
  updatePasswordForm: FormGroup;
  userProfile: UserDetailsResponse;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (localStorage.getItem('jwt') !== null) {
      this.authenticationService.getUserProfile()
        .subscribe(profile => {
          this.userProfile = profile;
        });
    }
    this.initForm();
    this.initForm2();
  }

  initForm() {
    let username = '';
    let name = '';
    let last_name = '';
    let email = '';
    if (this.userProfile !== undefined) {
      username = this.userProfile.username;
      name = this.userProfile.name;
      last_name = this.userProfile.last_name;
      email = this.userProfile.email;
    }
    this.updateProfileForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'name': new FormControl(name, Validators.required),
      'last_name': new FormControl(last_name, Validators.required),
      'email': new FormControl(email, [Validators.email, Validators.required])
    });
  }

  onSubmit() {
    console.log('posodobi');
    console.log(this.updateProfileForm.value);
    // this.authenticationService.updateUserProfile(this.updateProfileForm.value)
    //   .subscribe(result => this.updateProfileForm.value = result)
  }

  initForm2() {
    let new_password = '';
    let repeat_password = '';
    if (this.userProfile !== undefined) {
      new_password = this.userProfile.username;
      repeat_password = this.userProfile.name;
    }
    this.updatePasswordForm = new FormGroup({
      'new_password': new FormControl(new_password, Validators.required),
      'repeat_password': new FormControl(repeat_password, Validators.required)
    });
  }

  onSubmitPassword() {
    console.log('posodobi geslo');
    console.log(this.updatePasswordForm.value);
    // this.authenticationService.updatePassword(this.updatePasswordForm.value)
    //   .subscribe(result => this.updatePasswordForm.value = result);
  }

}
