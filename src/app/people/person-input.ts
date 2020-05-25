export interface PersonInput {
  name: string;
  surrName: string;
  dateOfBirth: string;
  role: Role;
}

export enum Role {
  CLIENT = 'CLIENT',
  PASSENGER = 'PASSENGER',
  SALESMAN= 'SALESMAN'
}
