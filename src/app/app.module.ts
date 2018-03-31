import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { RoomieStatusComponent } from './roomie-status/roomie-status.component';
import { RoomieMessagesComponent } from './roomie-messages/roomie-messages.component';
import { ManageRoomieComponent } from './manage-roomie/manage-roomie.component';
import { AllRoomieMessagesComponent } from './all-roomie-messages/all-roomie-messages.component';

import { RoomieDbService } from './services/roomie-db.service';


@NgModule({
  declarations: [
    AppComponent,
    RoomPageComponent,
    RoomieStatusComponent,
    RoomieMessagesComponent,
    ManageRoomieComponent,
    AllRoomieMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    RoomieDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
