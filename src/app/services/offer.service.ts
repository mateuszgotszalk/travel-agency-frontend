import { OFFERS } from './../offer/model/mock-offers';
import { Injectable } from '@angular/core';
import { Offer } from '../offer/model/offer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  offers: Offer[] = OFFERS;

  constructor() { }

  getOffers(): Observable<Offer[]> {
    return of(this.offers);
  }

  getOffer(id: number): Observable<Offer> {
    return of(this.offers.find(offer => offer.offerId === id));
  }
}
