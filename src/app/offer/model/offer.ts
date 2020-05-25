import { Flight } from './flight';
import { Hotel } from './hotel';

export interface Offer {

  offerId: number;
  price: number;
  standard: Standard;
  kindOfApartment: string;
  flight: Flight;
  hotel: Hotel;
}

export enum Standard {
  AllInclusive = 'AllInclusive',
  HB = 'HB',
  BB = 'BB',
  WL = 'WL'
}
