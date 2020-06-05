import { Role } from './person-input';

export interface Person {

  personId: number;
  name: string;
  surrName: string;
  dateOfBirth: string;
  role: Role;
}
