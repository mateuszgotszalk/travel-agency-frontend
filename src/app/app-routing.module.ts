import { TripComponent } from './trip/trip.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferComponent } from './offer/offer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'offers', component: OfferComponent},
  {path: '', redirectTo: 'offers', pathMatch: 'full'},
  {path: 'offers/detail/:id', component: OfferDetailComponent},
  {path: 'create-trip', component: TripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
