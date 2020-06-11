import { PersonService } from './../services/person.service';
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

  people: PersonOutput[] = [];
  searchPerson: string;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.personService.getPeople()
      .subscribe(people => this.people = people
        .filter(person => person.role === Role.CLIENT));
    console.log('getPeople');
  }

}
