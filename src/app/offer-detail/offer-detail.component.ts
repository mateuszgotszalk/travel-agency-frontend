import { TripInput } from './../trip/model/trip-input';
import { Offer } from './../offer/model/offer';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {

  @Input()
  offer: Offer;

  peopleAmount: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createTripDetails() {
    this.router.navigate(['/create-trip'], {queryParams: { offerId: this.offer.offerId, peopleAmount: this.peopleAmount }});
  }
}
