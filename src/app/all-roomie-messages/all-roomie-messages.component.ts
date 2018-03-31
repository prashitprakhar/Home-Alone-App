import { Component, OnInit } from '@angular/core';

import { Observable, Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { RoomieDbService } from '../services/roomie-db.service';

@Component({
  selector: 'app-all-roomie-messages',
  templateUrl: './all-roomie-messages.component.html',
  styleUrls: ['./all-roomie-messages.component.css']
})
export class AllRoomieMessagesComponent implements OnInit {

  subscription: Subscription;
  roomie_details$: FirebaseListObservable<any[]>;
  roomie_details: any[];

  public roomie_message;

  constructor(public roomieDbService : RoomieDbService){
    this.roomie_message = this.roomieDbService.getAllData();
    this.roomie_message.subscribe(item => {
      this.roomie_details$ = item;
    });
  }

  ngOnInit() {
  }

}
