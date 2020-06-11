import { TripService } from './../services/trip.service';
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
  searchTrip: string;
  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips() {
    this.tripService.getTrips().subscribe(trips => this.trips = trips);
  }

  deleteTrip() {
    this.tripService.deleteTrip(this.selectedTrip.tripId).subscribe(res => {
      location.reload();
    });
  }

  changeStatus(status: Status) {
    this.tripService.changeStatus(this.selectedTrip.tripId, status).subscribe();
  }

  onSelect(trip: Trip) {
    this.selectedTrip = trip;
  }

}
