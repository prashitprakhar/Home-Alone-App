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
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RoomPageComponent } from './room-page/room-page.component';
import { RoomieStatusComponent } from './roomie-status/roomie-status.component';
import { RoomieMessagesComponent } from './roomie-messages/roomie-messages.component';
import { ManageRoomieComponent } from './manage-roomie/manage-roomie.component';
import { AllRoomieMessagesComponent } from './all-roomie-messages/all-roomie-messages.component';
import { RoomieLogoutComponent } from './roomie-logout/roomie-logout.component';

import { RoomieDbService } from './services/roomie-db.service';
import { AllRoomieLoginPageComponent } from './all-roomie-login-page/all-roomie-login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AllRoomieManagementPageComponent } from './all-roomie-management-page/all-roomie-management-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AllRoomieHomePageComponent } from './all-roomie-home-page/all-roomie-home-page.component';
import { RoomieAuthService } from './services/roomie-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    RoomPageComponent,
    RoomieStatusComponent,
    RoomieMessagesComponent,
    ManageRoomieComponent,
    AllRoomieMessagesComponent,
    AllRoomieHomePageComponent,
    AllRoomieLoginPageComponent,
    ProfilePageComponent,
    AllRoomieManagementPageComponent,
    NotFoundComponent,
    RoomieLogoutComponent
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
    AngularFireDatabaseModule,
    //AngularFireAuth,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AllRoomieLoginPageComponent
      },
      {
        path: 'profile/:username',
        component: ProfilePageComponent
      },
      {
        path: 'roommanagement/:username',
        component: AllRoomieManagementPageComponent
      },
      {
        path: 'logout',
        component: RoomieLogoutComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    RoomieDbService,
    RoomieAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
