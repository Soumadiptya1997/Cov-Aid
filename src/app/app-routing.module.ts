import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Compontents
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { FaqComponent } from './faq/faq.component';
import { SearchPinComponent } from './search-pin/search-pin.component';
import { SearchDistrictComponent } from './search-district/search-district.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { RegistrationComComponent } from './registration-com/registration-com.component';
import { SchedulingComComponent } from './scheduling-com/scheduling-com.component';
import { VaccinationComComponent } from './vaccination-com/vaccination-com.component';
import { CertificateComComponent } from './certificate-com/certificate-com.component';
import { SideeffectComComponent } from './sideeffect-com/sideeffect-com.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SearchDComponent } from './search-d/search-d.component';
import { SearchPComponent } from './search-p/search-p.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'schedule', component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  DashboardComponent,
  LoginComponent,
  HomePageComponent,
  RegisterComponent,
  FaqComponent,
  SearchPinComponent,
  SearchDistrictComponent,
  SearchContentComponent,
  RegistrationComComponent,
  SchedulingComComponent,
  VaccinationComComponent,
  CertificateComComponent,
  SideeffectComComponent,
  ScheduleComponent,
  SearchDComponent,
  SearchPComponent,
];
