import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionFiveComponent } from './app/landing-page/section-five/section-five.component';
import { SectionFourComponent } from './app/landing-page/section-four/section-four.component';
import { SectionOneComponent } from './app/landing-page/section-one/section-one.component';
import { SectionThreeComponent } from './app/landing-page/section-three/section-three.component';
import { SectionTwoComponent } from './app/landing-page/section-two/section-two.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'What is foodie ', component: SectionOneComponent },
  { path: 'About us', component: SectionTwoComponent },
  { path: 'How to Use', component: SectionThreeComponent },
  { path: 'Quiz', component: SectionFourComponent },
  { path: 'Contact us', component: SectionFiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}