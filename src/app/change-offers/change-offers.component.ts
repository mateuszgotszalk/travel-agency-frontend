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

  offers: Offer[] = [];
  //standard: Standard = Standard.WL;
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

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffers()
      .subscribe(offers => this.offers = offers);
  }

  deleteOffer(offer: Offer){

  }

  addOffer(){
    console.log('price:' + this.newOffer.price);
    console.log('standard:' + this.newOffer.standard);
    console.log('kindOfApartment:' + this.newOffer.kindOfApartment);
    console.log('hotelName:' + this.newOffer.hotelName);
    console.log('hotelCountry:' + this.newOffer.hotelCountry);
    console.log('price:' + this.newOffer.price);
    console.log('price:' + this.newOffer.price);
  }

}
