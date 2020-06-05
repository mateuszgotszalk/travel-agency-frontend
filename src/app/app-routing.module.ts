import { PeopleComponent } from './people/people.component';
import { TripManagementComponent } from './trip-management/trip-management.component';
import { TripComponent } from './trip/trip.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferComponent } from './offer/offer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeOffersComponent } from './change-offers/change-offers.component';


const routes: Routes = [
  { path: 'offers', component: OfferComponent },
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers/detail/:id', component: OfferDetailComponent },
  { path: 'create-trip', component: TripComponent },
  { path: 'change-offers', component: ChangeOffersComponent },
  { path: 'trips', component: TripManagementComponent },
  { path: 'people', component: PeopleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
