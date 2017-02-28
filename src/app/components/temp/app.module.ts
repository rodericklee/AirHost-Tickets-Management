import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
