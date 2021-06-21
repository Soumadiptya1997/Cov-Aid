import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponent } from './app-routing.module';

// App Compontent
import { AppComponent } from './app.component';

@NgModule({
  declarations: [routingComponent, AppComponent],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
