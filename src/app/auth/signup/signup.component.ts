import { SignupRequest } from './models/signup-request';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupRequest: SignupRequest;
  isRegistered: boolean = false;

  constructor( private authService: AuthService) {
    this.signupRequest = {
      firstName: '',
      surname: '',
      username: '',
      email: '',
      password: ''
    };

  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  signup(): void {
    this.signupRequest.firstName = this.signupForm.get('firstName').value;
    this.signupRequest.surname = this.signupForm.get('lastName').value;
    this.signupRequest.username = this.signupForm.get('userName').value;
    this.signupRequest.email = this.signupForm.get('email').value;
    this.signupRequest.password = this.signupForm.get('password').value;

    this.authService.signup(this.signupRequest).subscribe(data => {
      console.log(data);
    });

    this.isRegistered = true;
  }

}
