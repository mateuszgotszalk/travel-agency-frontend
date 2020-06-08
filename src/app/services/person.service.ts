import { PersonOutput } from './../people/models/person-output';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  httpHeaders: HttpHeaders = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('content-type', 'application/json')
    .set('Accept', '*/*');
  URL = 'http://localhost:6601/people/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PersonOutput[]> {
    return this.http.get<PersonOutput[]>(this.URL + 'getPeople', { headers: this.httpHeaders });
  }

  getPerson(id: number): Observable<PersonOutput> {
    return this.http.get<PersonOutput>(this.URL + 'getPerson/' + id, { headers: this.httpHeaders });
  }
}
