import { OfferService } from './../services/offer.service';
import { Component, OnInit } from '@angular/core';
import { Offer } from './model/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers: Array<Offer>;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offerService.getOffers()
      .subscribe(offers => this.offers = offers);
  }
}
