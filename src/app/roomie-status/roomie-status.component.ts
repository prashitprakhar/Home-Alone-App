import { Component, OnInit } from '@angular/core';

import { Observable, Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-roomie-status',
  templateUrl: './roomie-status.component.html',
  styleUrls: ['./roomie-status.component.css']
})
export class RoomieStatusComponent implements OnInit {


  subscription: Subscription;
  roomie_details$: FirebaseListObservable<any[]>;
  roomie_details: any[];

  constructor( private db: AngularFireDatabase){
    this.roomie_details$ = this.db.list('/roomie_details');

  }

  ngOnInit() {
  }



}
