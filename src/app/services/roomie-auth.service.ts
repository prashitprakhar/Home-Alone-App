import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class RoomieAuthService {

  user$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.user$ = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut()
    .then((resolve) => {
      this.router.navigate(['']);
    })
    .catch((err) => {
      this.router.navigate(['**'])
    });
  }

}
