import { Camera } from '@ionic-native/camera/ngx';
import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{ firebaseConfig } from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule, AngularFireAuth} from "@angular/fire/auth";
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreModule, AngularFirestore ,AngularFirestoreDocument} from "@angular/fire/firestore";

import { AngularFireStorageModule } from "@angular/fire/storage";
import { firestore } from 'firebase';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),
 AngularFireAuthModule, AngularFireStorageModule, AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
