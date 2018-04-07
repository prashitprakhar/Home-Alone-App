import { Component, OnInit, Input } from '@angular/core';
import { RoomieAuthService } from '../services/roomie-auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user;

  constructor(private authService: RoomieAuthService) { 
    authService.user$.subscribe((user)=> {
      if(user){
      this.user = user.displayName;
      }
    });
  }

  ngOnInit() {
  }

}
