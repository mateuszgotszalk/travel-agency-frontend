import { OfferService } from './../services/offer.service';
import { OFFERS } from './model/mock-offers';
import { Component, OnInit } from '@angular/core';
import { Offer } from './model/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {


  selectedOffer: Offer;
  offers: Array<Offer>;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offerService.getOffers()
      .subscribe(offers => this.offers = offers);
  }

  selectOffer(offer: Offer) {
    this.selectedOffer = offer;
  }
}
