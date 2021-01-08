import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';

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
    FilterTripPipe,
    SignupComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
