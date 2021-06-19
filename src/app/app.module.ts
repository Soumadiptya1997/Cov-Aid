import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Compontents
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPinComponent } from './search-pin/search-pin.component';
import { SearchDistrictComponent } from './search-district/search-district.component';
import { RegisterComponent } from './register/register.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { FaqComponent } from './faq/faq.component';
import { RegistrationComComponent } from './registration-com/registration-com.component';
import { SchedulingComComponent } from './scheduling-com/scheduling-com.component';
import { VaccinationComComponent } from './vaccination-com/vaccination-com.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomePageComponent,
    SearchPinComponent,
    SearchDistrictComponent,
    RegisterComponent,
    SearchContentComponent,
    FaqComponent,
    RegistrationComComponent,
    SchedulingComComponent,
    VaccinationComComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'faq', component: FaqComponent },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
