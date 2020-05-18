import { Flight } from './flight';
import { Hotel } from './hotel';

export interface Offer {

  offerId: number;
  price: number;
  standard: string;
  kindOfApartment: string;
  flight: Flight;
  hotel: Hotel;
}
