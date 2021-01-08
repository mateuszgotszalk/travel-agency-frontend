import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  newOffer: OfferInput;
  searchOffer: string;
  offerForm: FormGroup;

  constructor(private offerService: OfferService) {
    this.newOffer = {
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
   }

  ngOnInit(): void {
    this.offerService.getOffers()
      .subscribe(offers => this.offers = offers);
    this.createOfferForm();
  }

  deleteOffer(offerId: number) {
    this.offerService.deleteOffer(offerId).subscribe(res => {
      location.reload();
    });
  }

  addOffer() {
    this.mapDates();
    this.createNewOffer();
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

  private createOfferForm(): void {
    this.offerForm = new FormGroup({
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      apartment: new FormControl('', [Validators.required, Validators.minLength(1)]),
      nameHotel: new FormControl('', [Validators.required, Validators.minLength(1)]),
      countryHotel: new FormControl('', [Validators.required, Validators.minLength(1)]),
      cityHotel: new FormControl('', [Validators.required, Validators.minLength(1)]),
      depAirport: new FormControl('', [Validators.required, Validators.minLength(1)]),
      depCountry: new FormControl('', [Validators.required, Validators.minLength(1)]),
      depDate: new FormControl('', [Validators.required]),
      arrAirport: new FormControl('', [Validators.required, Validators.minLength(1)]),
      arrCountry: new FormControl('', [Validators.required, Validators.minLength(1)]),
      arrDate: new FormControl('', [Validators.required, Validators.minLength(1)]),
      cost: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  private createNewOffer(): void {
    this.newOffer.price = this.offerForm.get('price').value;
    this.newOffer.kindOfApartment = this.offerForm.get('apartment').value;
    this.newOffer.hotelName = this.offerForm.get('nameHotel').value;
    this.newOffer.hotelCountry = this.offerForm.get('countryHotel').value;
    this.newOffer.hotelCity = this.offerForm.get('cityHotel').value;
    this.newOffer.departureAirport = this.offerForm.get('depAirport').value;
    this.newOffer.departureCountry = this.offerForm.get('depCountry').value;
    this.newOffer.departureDate = this.offerForm.get('depDate').value;
    this.newOffer.arrivalAirport = this.offerForm.get('arrAirport').value;
    this.newOffer.arrivalCountry = this.offerForm.get('arrCountry').value;
    this.newOffer.arrivalDate = this.offerForm.get('arrDate').value;
    this.newOffer.flightCost = this.offerForm.get('cost').value;
  }
}
