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
  departureTime: string;
  arrivalTime: string;
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

  deleteOffer(offerId: number) {
    this.offerService.deleteOffer(offerId).subscribe(res => {
      location.reload();
    });
  }

  addOffer() {
    this.mapDates();
    this.offerService.addOffer(this.newOffer).subscribe(res => {
      location.reload();
    });
  }

  mapDates() {
    let date = this.newOffer.departureDate;
    this.newOffer.departureDate = date.slice(8, 10) + date.slice(4, 8) + date.slice(0, 4) + ' ' + this.departureTime + ':00';
    console.log('departureDate ' + this.newOffer.departureDate);
    date = this.newOffer.arrivalDate;
    this.newOffer.arrivalDate = date.slice(8, 10) + date.slice(4, 8) + date.slice(0, 4) + ' ' + this.arrivalTime + ':00';
    console.log('arrivalDate ' + this.newOffer.arrivalDate);
  }
}
