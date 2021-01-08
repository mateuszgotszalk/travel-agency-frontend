import { Status, Trip } from './../trip-management/model/trip';
import { TripInput } from './../trip/model/trip-input';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  httpHeaders: HttpHeaders = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('content-type', 'application/json')
    .set('Accept', '*/*')
    .set('Authorization', 'Bearer ' + this.localStorage.retrieve("token"));
  URL = 'http://localhost:6601/trip/';

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.URL + 'getTrips', { headers: this.httpHeaders });
  }

  getTrip(id: number): Observable<Trip> {
    return this.http.get<Trip>(this.URL + 'getTrip/' + id, { headers: this.httpHeaders });
  }

  addTrip(trip: TripInput): Observable<Trip> {
    return this.http.post<Trip>(this.URL + 'addTrip', trip, { headers: this.httpHeaders });
  }

  deleteTrip(id: number): Observable<any> {
    return this.http.delete(this.URL + 'deleteTrip/' + id, { headers: this.httpHeaders });
  }

  changeStatus(id: number, status: Status): Observable<any> {
    const body = '"' + status.toString() + '"';
    return this.http.put(this.URL + 'changeStatus/' + id, body, { headers: this.httpHeaders });
  }
}
