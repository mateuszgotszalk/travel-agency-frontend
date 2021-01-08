import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginRequest } from './models/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequest: LoginRequest;
  isLoged: boolean = false;

  constructor(private authService: AuthService) {
    this.loginRequest = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(): void {
    this.loginRequest.username = this.loginForm.get('userName').value;
    this.loginRequest.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequest).subscribe(res => {
      this.isLoged = true;
    });
  }

}
