import { LoginResponse } from './../auth/login/models/login-response';
import { LoginRequest } from './../auth/login/models/login-request';
import { Observable } from 'rxjs';
import { SignupRequest } from './../auth/signup/models/signup-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpHeaders: HttpHeaders = new HttpHeaders()
    .set('Access-Control-Allow-Origin', 'http://localhost:4200')
    .set('content-type', 'application/json')
    .set('Accept', '*/*')
    .set('Authorization', 'Bearer ' + this.localStorage.retrieve("token"));

  URL = 'http://localhost:6601/';

  constructor(private http: HttpClient,
    private localStorage: LocalStorageService) { }

  signup(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(this.URL + 'registration', signupRequest, { headers: this.httpHeaders, responseType: "text" });
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<LoginResponse>(this.URL + 'login', loginRequest, { headers: this.httpHeaders, observe: 'response' })
    .pipe(map(res => {
      this.localStorage.store('user', res.body.user);
      this.localStorage.store('token', res.body.token);
      }));
  }

}
