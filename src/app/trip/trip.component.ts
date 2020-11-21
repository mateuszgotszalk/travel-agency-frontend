import { Trip } from './../trip-management/model/trip';
import { TripService } from './../services/trip.service';
import { Location } from '@angular/common';
import { TripInput } from './model/trip-input';
import { PersonInput, Role } from '../people/models/person-input';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  peopleAmount: number;
  offerId: number;
  peopleInput: Array<PersonInput> = [];
  trip: Trip;
  tripForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tripService: TripService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.offerId = +params.offerId;
      this.peopleAmount = +params.peopleAmount;
    });
    this.peopleInput = new Array<PersonInput>(this.peopleAmount);
    this.createPeopleInput();
    const peopleForm = new FormArray([]);
    this.peopleInput.forEach(e => {
      peopleForm.push(new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
        date: new FormControl('', [Validators.required]),
      }));
    });
    this.tripForm = new FormGroup({
      people: peopleForm
    });
    console.log(this.tripForm.get('people').get('0').get('surname'));
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

    for (let index = 0; index < this.peopleInput.length; index++) {
      this.peopleInput[index] = {
        name: this.tripForm.get('people').value[index].name,
        surrName: this.tripForm.get('people').value[index].surname,
        dateOfBirth: this.tripForm.get('people').value[index].date,
        role: this.checkRole(index)
      };
    }

    this.mapDates();
    this.peopleInput.forEach(person => {
      console.log('person ' + person.name + ' ' + person.surrName + ' ' + person.role + ' Data uro: ' + person.dateOfBirth);
    });

    const tripInput: TripInput = {
      salesman: 'online',
      people: this.peopleInput,
      offerId: this.offerId
    };

    this.tripService.addTrip(tripInput)
      .subscribe(res => {
        this.trip = res;
      });
  }

  // mapping Dates to pattern dd-MM-yyyy for backend software
  mapDates() {
    this.peopleInput.forEach(person => {
      const date = person.dateOfBirth;
      person.dateOfBirth = date.slice(-2) + date.slice(4, 7) + '-' + date.slice(0, 4);
    });
  }

  goBack() {
    this.location.back();
  }

  track(index: number, obj: any): any {
    return index;
  }
}
