import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from './trip-management/model/trip';

@Pipe({
  name: 'filterTrip'
})
export class FilterTripPipe implements PipeTransform {

  transform(value: Trip[], searchText: string): Trip[] {
      return value.filter(trip => this.checkOffer(trip, searchText));
  }

  checkOffer(trip: Trip, searchText: string): unknown {
    if (trip.tripId.toString().includes(searchText) ||
      trip.totalCost.toString().includes(searchText) ||
      trip.status.toString().includes(searchText) ||
      trip.offer.standard.toString().includes(searchText) ||
      trip.offer.kindOfApartment.includes(searchText) ||
      trip.offer.hotel.hotelName.includes(searchText) ||
      trip.offer.hotel.hotelCountry.includes(searchText) ||
      trip.offer.flight.departureAirport.includes(searchText) ||
      trip.offer.flight.arrivalAirport.includes(searchText) ||
      searchText === undefined) {
      return true;
    } else {
      return false;
    }
  }

}
