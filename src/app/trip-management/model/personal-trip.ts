import { Status } from './trip';

export interface PersonalTrip {

  tripId: number;
  totalCost: number;
  salesman: string;
  status: Status;
}
