import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { RoomieStatusComponent } from './roomie-status/roomie-status.component';
import { RoomieMessagesComponent } from './roomie-messages/roomie-messages.component';



@NgModule({
  declarations: [
    AppComponent,
    RoomPageComponent,
    RoomieStatusComponent,
    RoomieMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
