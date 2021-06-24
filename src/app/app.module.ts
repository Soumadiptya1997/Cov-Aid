import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';

// App Compontent
import { AppComponent } from './app.component';
import { SearchDComponent } from './search-d/search-d.component';
import { SearchPComponent } from './search-p/search-p.component';


@NgModule({
  declarations: [routingComponent, AppComponent, SearchDComponent, SearchPComponent, ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
