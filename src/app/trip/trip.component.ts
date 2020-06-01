import { PersonInput, Role } from './../people/person-input';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  peopleAmount: number;
  offerId: number;
  peopleInput: Array<PersonInput> = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.offerId = +params['offerId'];
      this.peopleAmount = +params['peopleAmount'];
    });
    this.peopleInput = new Array<PersonInput>(this.peopleAmount);
    this.createPeopleInput();
  }

  createPeopleInput() {
    for (let i = 0; i < this.peopleInput.length; i++) {
      this.peopleInput[i] = {
        name: '',
        surrName: '',
        dateOfBirth: '',
        role: this.checkRole(i)
      };
    }
  }

  checkRole(index: number): Role {
    if (index === 0) {
      return Role.CLIENT;
    }
    else {
      return Role.PASSENGER;
    }
  }

  createTrip() {
    this.checkDates();
    this.peopleInput.forEach(person => {
      console.log('person ' + person.name + ' ' + person.surrName + ' ' + person.role + ' Data uro: ' + person.dateOfBirth);
    });
  }

  checkDates() {
    this.peopleInput.forEach(person => {

    });
  }
}
