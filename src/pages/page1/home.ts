import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { AuthData } from '../../providers/auth-data';

import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class home {

  constructor(public navCtrl: NavController, public angfire: AngularFire, public auth: AuthData) {

    this.navCtrl = navCtrl;
  }
  logout() {
    this.auth.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

  myFunction() {
    var x = document.getElementById('Readme');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
  }

}

