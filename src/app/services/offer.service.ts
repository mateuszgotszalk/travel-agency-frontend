import { OfferInput } from './../offer/model/offer-input';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { OFFERS } from './../offer/model/mock-offers';
import { Injectable } from '@angular/core';
import { Offer } from '../offer/model/offer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  httpHeaders: HttpHeaders = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('content-type', 'application/json')
    .set('Accept', '*/*');
    URL = 'http://localhost:6601/offer/';

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.URL + 'getOffers', { headers: this.httpHeaders });
  }

  getOffer(id: number): Observable<Offer> {
    return this.http.get<Offer>(this.URL + 'getOffer/' + id, { headers: this.httpHeaders });
  }

  addOffer(offer: OfferInput): Observable<any> {
    return this.http.post(this.URL + 'addOffer', offer, { headers: this.httpHeaders });
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete(this.URL + 'deleteOffer/' + id, { headers: this.httpHeaders });
  }
}
