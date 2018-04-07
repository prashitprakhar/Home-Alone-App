import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { RoomieAuthService } from '../services/roomie-auth.service';

@Component({
  selector: 'app-roomie-logout',
  templateUrl: './roomie-logout.component.html',
  styleUrls: ['./roomie-logout.component.css']
})
export class RoomieLogoutComponent implements OnInit {

  constructor(private authService: RoomieAuthService, private router: Router ) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout()
  }
}
