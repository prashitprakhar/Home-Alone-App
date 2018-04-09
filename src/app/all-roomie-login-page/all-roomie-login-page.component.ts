import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { RoomieAuthService } from '../services/roomie-auth.service';

@Component({
  selector: 'app-all-roomie-login-page',
  templateUrl: './all-roomie-login-page.component.html',
  styleUrls: ['./all-roomie-login-page.component.css']
})
export class AllRoomieLoginPageComponent implements OnInit{

  public user;

  constructor(private authService: RoomieAuthService, private router: Router) { }

  ngOnInit(){
    this.authService.user$.subscribe((user) => {
      this.user = user;
      if(user != null){
            this.router.navigate(['/profile/'+user.displayName]);
          }
    })
  }

  login(){
    this.authService.login();
  }

}
