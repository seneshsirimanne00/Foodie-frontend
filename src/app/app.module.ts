import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { SectionOneComponent } from './landing-page/section-one/section-one.component';
import { SectionTwoComponent } from './landing-page/section-two/section-two.component';
import { SectionThreeComponent } from './landing-page/section-three/section-three.component';
import { SectionFourComponent } from './landing-page/section-four/section-four.component';
import { SectionFiveComponent } from './landing-page/section-five/section-five.component';
import { AppRoutingModule } from 'src/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
