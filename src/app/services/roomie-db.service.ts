import { Injectable } from '@angular/core';

import { Observable, Subscribable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
//import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class RoomieDbService {

  subscription: Subscription;
  roomie_details$: FirebaseListObservable<any[]>;
  roomie_details: any[];

  constructor( private db: AngularFireDatabase){
    //this.roomie_details$ = this.db.list('/roomie_details');
  }

  getAllData() {
    return this.db.list('/roomie_details');
  }

  updateMessage(roomieId, roomieMessage){
    //console.log("Roomie ID : ",roomieId," Roomie Message : ",roomieMessage);
    let updateMessageServiceOut = this.db.object('/roomie_details/'+roomieId)
      .update({
        message: roomieMessage
      });
      //console.log("Update message Service call Output : ",updateMessageServiceOut);
  }

}
