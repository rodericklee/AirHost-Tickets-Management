import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketDetailComponent } from './components/tickets/ticket-detail.component';
import { TicketService } from './services/ticket';

import { AppRoutingModule } from './app-routing.module';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBf5lHeRgAHbj8GNHPgbKqiS-NOE9B0ZjE',
  authDomain: 'https://airhost-test-3771e.firebaseio.com',
  databaseURL: 'https://airhost-test-3771e.firebaseio.com',
  storageBucket: 'https://bitbucket.org/triosky/airhost-angular3',
  messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    TicketsComponent,
    TicketDetailComponent
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
