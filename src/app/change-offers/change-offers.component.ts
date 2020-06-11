import { Location } from '@angular/common';
import { OfferInput } from './../offer/model/offer-input';
import { OfferService } from './../services/offer.service';
import { Component, OnInit } from '@angular/core';
import { Offer, Standard } from '../offer/model/offer';

@Component({
  selector: 'app-change-offers',
  templateUrl: './change-offers.component.html',
  styleUrls: ['./change-offers.component.css']
})
export class ChangeOffersComponent implements OnInit {

  offers: Offer[];
  newOffer: OfferInput = {
    price: 0,
    standard: Standard.WL,
    kindOfApartment: '',
    hotelName: '',
    hotelCountry: '',
    hotelCity: '',
    departureAirport: '',
    departureCountry: '',
    departureDate: '',
    arrivalAirport: '',
    arrivalCountry: '',
    arrivalDate: '',
    flightCost: 0
  };
  searchOffer: string;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffers()
      .subscribe(offers => this.offers = offers);
  }

  deleteOffer(offerId: number){
    this.offerService.deleteOffer(offerId).subscribe(res => {
      location.reload();
    });
  }

  addOffer(){
    this.offerService.addOffer(this.newOffer).subscribe(res => {
      location.reload();
    });
  }
}
