import { Component, ViewChild, NgZone } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import firebase from 'firebase';
import { home } from '../pages/page1/home';
import { About } from '../pages/page2/About';
import { Adoptdog } from '../pages/page3/Adoptdog'
import { Adoptcat } from '../pages/page4/Adoptcat'
import { mammal } from '../pages/page5/mammal'
import { lost } from '../pages/page6/lost'
import { spay } from '../pages/page7/spay'
import { involved } from '../pages/page8/involved'
import { happy } from '../pages/page9/happy'
import { Contact } from '../pages/page10/Contact'
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = home;
  zone: NgZone;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: Splashscreen) {
    this.zone = new NgZone ({});
    firebase.initializeApp({
      apiKey: "AIzaSyDwGDAH_PeR5e5aFXHJkVdhPfrsCd4OQIY",
      authDomain: "olhs-4dd03.firebaseapp.com",
      databaseURL: "https://olhs-4dd03.firebaseio.com",
      projectId: "olhs-4dd03",
      torageBucket: "olhs-4dd03.appspot.com",
      messagingSenderId: "162792102595"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else {
          this.rootPage = home;
          unsubscribe();
        }
      });
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: home },
      { title: 'About', component: About },
      { title: 'Adopt a Dog', component: Adoptdog },
      { title: 'Adopt a Cat', component: Adoptcat },
      { title: 'Adopt Exotic Animal', component: mammal },
      { title: 'Lost & Found Pets', component: lost },
      { title: 'Spay/Neuter Programs', component: spay },
      { title: 'Get Involved', component: involved },
      { title: 'Happy Tails', component: happy },
      { title: 'Contact Us', component: Contact }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
