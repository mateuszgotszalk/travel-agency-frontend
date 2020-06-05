import { OFFERS } from './../offer/model/mock-offers';
import { Component, OnInit } from '@angular/core';
import { Trip, Status } from './model/trip';
import { Role } from '../people/models/person-input';

@Component({
  selector: 'app-trip-management',
  templateUrl: './trip-management.component.html',
  styleUrls: ['./trip-management.component.css']
})
export class TripManagementComponent implements OnInit {

  trips: Array<Trip> = [];
  selectedTrip: Trip;

  constructor() { }

  ngOnInit(): void {
    // TODO trip service for get trips
    this.getTrips();
  }

  getTrips() {
    this.trips.push({
      tripId: 0,
      totalCost: 3000,
      salesman: 'online',
      status: Status.W_TRAKCIE,
      people: [{
        personId: 10,
        name: 'MockName',
        surrName: 'MockSurName',
        dateOfBirth: '19-11-1995',
        role: Role.CLIENT
      },
      {
        personId: 11,
        name: 'MockName1',
        surrName: 'MockSurName1',
        dateOfBirth: '19-11-1996',
        role: Role.PASSENGER
      }],
      offer: OFFERS[0]
    });
  }

  deleteTrip() {

  }

  changeStatus() {

  }

  onSelect(trip: Trip) {
    this.selectedTrip = trip;
  }

}
