import { Offer, Standard } from './offer';

export const OFFERS: Offer[] = [
  {
    offerId: 1,
    price: 2000,
    standard: Standard.AllInclusive,
    kindOfApartment: '1pok2os',
    flight: {
      flightId: 2,
      departureAirport: 'WAW',
      departureCountry: 'PL',
      departureDate: '12-03-2020',
      arrivalAirport: 'LA',
      arrivalCountry: 'USA',
      arrivalDate: '23-03-2020',
      flightCost: 400
    },
    hotel: {
      hotelId: 3,
      hotelName: 'hotelName',
      hotelCountry: 'USA',
      hotelCity: 'LA'
    }
  },
  {
    offerId: 4,
    price: 3000,
    standard: Standard.AllInclusive,
    kindOfApartment: '1pok2os',
    flight: {
      flightId: 5,
      departureAirport: 'WAW',
      departureCountry: 'PL',
      departureDate: '12-03-2020',
      arrivalAirport: 'LA',
      arrivalCountry: 'USA',
      arrivalDate: '23-03-2020',
      flightCost: 400
    },
    hotel: {
      hotelId: 6,
      hotelName: 'hotelName',
      hotelCountry: 'USA',
      hotelCity: 'LA'
    }
  },
  {
    offerId: 7,
    price: 2300,
    standard: Standard.BB,
    kindOfApartment: '1pok2os',
    flight: {
      flightId: 3,
      departureAirport: 'WRO',
      departureCountry: 'PL',
      departureDate: '14-06-2020',
      arrivalAirport: 'TRP',
      arrivalCountry: 'ITALY',
      arrivalDate: '28-06-2020',
      flightCost: 300
    },
    hotel: {
      hotelId: 8,
      hotelName: 'Sole Mare',
      hotelCountry: 'Italy',
      hotelCity: 'Tropea'
    }
  }
];
