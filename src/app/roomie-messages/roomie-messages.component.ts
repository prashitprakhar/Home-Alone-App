import { Component, OnInit, Input } from '@angular/core';

import { RoomieDbService } from '../services/roomie-db.service';

@Component({
  selector: 'app-roomie-messages',
  templateUrl: './roomie-messages.component.html',
  styleUrls: ['./roomie-messages.component.css']
})
export class RoomieMessagesComponent implements OnInit {

  //@Input()
  public roomieMessage = '';
  
  constructor( private roomieDbService : RoomieDbService){
    // this.allData = this.roomieDbService.getAllData();
    // this.allData.subscribe(item => {
    //   this.roomie_details$ = item;
    // });
  }

  ngOnInit() {
  }

  leaveMessage(){
    this.roomieDbService.updateMessage(1, this.roomieMessage);
    //console.log("Roomie Message is : ",this.roomieMessage);

  }

}
