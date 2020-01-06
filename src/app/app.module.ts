import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponentComponent } from '../app/common/header-component/header-component.component';
import { FooterComponentComponent } from '../app/common/footer-component/footer-component.component';
import { HomeComponentComponent } from './shared/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
