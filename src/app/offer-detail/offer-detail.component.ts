import { Offer } from './../offer/model/offer';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OfferService } from '../services/offer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {

  offer: Offer;

  peopleAmount: number;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.getOffer();
  }

  getOffer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.offerService.getOffer(id).subscribe(offer => this.offer = offer);
  }

  createTripDetails() {
    this.router.navigate(['/create-trip'], { queryParams: { offerId: this.offer.offerId, peopleAmount: this.peopleAmount } });
  }

  goBack() {
    this.location.back();
  }
}
