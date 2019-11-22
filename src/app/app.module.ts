import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
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
import { LoginPage } from '../pages/login/login'
import { SignupPage } from '../pages/signup/signup'
import { ResetPasswordPage } from '../pages/reset-password/reset-password'
import { GetProviders } from './app.providers';
  // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyDwGDAH_PeR5e5aFXHJkVdhPfrsCd4OQIY",
    authDomain: "olhs-4dd03.firebaseapp.com",
    databaseURL: "https://olhs-4dd03.firebaseio.com",
    projectId: "olhs-4dd03",
    storageBucket: "olhs-4dd03.appspot.com",
    messagingSenderId: "162792102595"
  };

@NgModule({
  declarations: [
    MyApp,
    home,
    About,
    Adoptdog,
    Adoptcat,
    mammal,
    lost,
    spay,
    involved,
    happy,
    Contact,
    LoginPage,
    SignupPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    home,
    About,
    Adoptdog,
    Adoptcat,
    mammal,
    lost,
    spay,
    involved,
    happy,
    Contact,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
  ],
  providers: GetProviders()
})
export class AppModule {}
