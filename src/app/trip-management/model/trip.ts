import { Offer } from './../../offer/model/offer';
import { Person } from 'src/app/people/models/person';

export interface Trip {

  tripId: number;
  totalCost: number;
  salesman: string;
  status: Status;
  people: Person[];
  offer: Offer;
}

export enum Status {
  UTWORZONA = 'UTWORZONA',
  OPLACONA = 'OPLACONA',
  W_TRAKCIE = 'W_TRAKCIE',
  ZAKONCZONA = 'ZAKONCZONA',
  ANULOWANA = 'ANULOWANA'
}
