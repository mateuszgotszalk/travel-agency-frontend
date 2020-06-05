import { PersonInput } from '../../people/models/person-input';
export interface TripInput {
  salesman: string;
  people: PersonInput[];
  offerId: number;
}
