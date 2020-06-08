import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { TripComponent } from './trip/trip.component';
import { ChangeOffersComponent } from './change-offers/change-offers.component';
import { TripManagementComponent } from './trip-management/trip-management.component';
import { PeopleComponent } from './people/people.component';
import { FilterPipe } from './filter.pipe';
import { FilterPersonPipe } from './filter-person.pipe';
import { FilterTripPipe } from './filter-trip.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    OfferDetailComponent,
    TripComponent,
    ChangeOffersComponent,
    TripManagementComponent,
    PeopleComponent,
    FilterPipe,
    FilterPersonPipe,
    FilterTripPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
