import { Component, OnInit } from '@angular/core';
import { FbService } from '../fb.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;

  constructor(
    private af: AngularFirestore,
    private afAuth: AngularFireAuth,
    private menu: MenuController,
    private db: FbService) {
      //get data in real time from database to this.user to be displayed on app
      const user = af.doc(`users/${this.db.getUID()}`)
      this.user = user.valueChanges();
    }

  ionViewWillEnter() {
      this.menu.enable(false);
  }
  ionViewDidLeave() {
      this.menu.enable(false);
  } 
 
  ngOnInit() {
  }

  //logs user out of the session
  logOut() {
    this.afAuth.auth.signOut();
  }
}
