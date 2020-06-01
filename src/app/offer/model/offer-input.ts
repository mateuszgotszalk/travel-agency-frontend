import { Standard } from './offer';

export interface OfferInput{
  price: number;
  standard: Standard;
  kindOfApartment: string;
  hotelName: string;
  hotelCountry: string;
  hotelCity: string;
  departureAirport: string;
  departureCountry: string;
  departureDate: string;
  arrivalAirport: string;
  arrivalCountry: string;
  arrivalDate: string;
  flightCost: number;
}
