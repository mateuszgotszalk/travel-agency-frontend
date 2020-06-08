import { PersonOutput } from './models/person-output';
import { Component, OnInit } from '@angular/core';
import { Role } from './models/person-input';
import { Status } from '../trip-management/model/trip';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: PersonOutput[] = [{
    name: 'Name1',
    surrName: 'Surname1',
    dateOfBirth: '19-11-1995',
    role: Role.CLIENT,
    trips_DTO: [{
      tripId: 12344,
      totalCost: 3499,
      salesman: 'online',
      status: Status.OPLACONA
    }]
  }];
  searchPerson: string;

  constructor() { }

  ngOnInit(): void {
  }

}
