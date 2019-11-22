import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';

import { StatusBar, Splashscreen } from 'ionic-native';




export function GetProviders() {
  let providers;
  if(document.URL.includes('https://') || document.URL.includes('http://')){
    // Use browser providers
    providers = [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthData,
      EventData,
      ProfileData,
      Splashscreen,
      StatusBar
    ];
  } else {
    // Use device providers
    providers = [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthData,
      EventData,
      ProfileData,
      Splashscreen,
      StatusBar
    ];
  }
  return providers;
}
