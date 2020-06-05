import { PersonalTrip } from './../../trip-management/model/personal-trip';
import { Role } from './person-input';

export interface PersonOutput {
  name: string;
  surrName: string;
  dateOfBirth: string;
  role: Role;
  trips_DTO: PersonalTrip[];
}
