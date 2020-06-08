import { Location } from '@angular/common';
import { TripInput } from './model/trip-input';
import { PersonInput, Role } from '../people/models/person-input';
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
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.offerId = +params.offerId;
      this.peopleAmount = +params.peopleAmount;
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
    this.mapDates();
    this.peopleInput.forEach(person => {
      console.log('person ' + person.name + ' ' + person.surrName + ' ' + person.role + ' Data uro: ' + person.dateOfBirth);
    });

    const tripInput: TripInput = {
      salesman: 'online',
      people: this.peopleInput,
      offerId: this.offerId
    };

  }

  // mapping Dates to pattern dd-MM-yyyy for backend software
  mapDates() {
    this.peopleInput.forEach(person => {
      const date = person.dateOfBirth;
      person.dateOfBirth = date.slice(-2) + date.slice(4, 7) + '-' + date.slice(0, 4);
    });
  }

  goBack(){
    this.location.back();
  }
}
