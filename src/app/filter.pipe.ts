import { Offer } from './offer/model/offer';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Offer[], searchText: string): Offer[] {
    return value.filter(offer => this.checkOffer(offer, searchText));
  }

  checkOffer(offer: Offer, searchText: string): boolean {
    if (offer.standard.toString().includes(searchText) ||
      offer.offerId.toString().includes(searchText) ||
      offer.kindOfApartment.includes(searchText) ||
      offer.flight.departureAirport.includes(searchText) ||
      offer.flight.arrivalAirport.includes(searchText) ||
      offer.flight.departureCountry.includes(searchText) ||
      offer.flight.arrivalCountry.includes(searchText) ||
      offer.hotel.hotelName.includes(searchText) ||
      offer.hotel.hotelCity.includes(searchText) ||
      searchText === undefined) {
      return true;
    } else {
      return false;
    }
  }
}
