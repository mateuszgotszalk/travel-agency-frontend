import { PersonInput } from './../people/person-input';
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
  peopleInput: PersonInput[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.offerId = +params['offerId'];
      this.peopleAmount = +params['peopleAmount'];
      console.log('trip.component got a param: offerId: ' + this.offerId);
      console.log('trip.component got a param: offerId: ' + this.peopleAmount);
    });
  }

  createTripInputForm() {

  }

}
