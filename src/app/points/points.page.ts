import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MenuController } from '@ionic/angular';
import { FbService } from '../fb.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.page.html',
  styleUrls: ['./points.page.scss'],
})
export class PointsPage implements OnInit {

  user: any;

  constructor(
    private af: AngularFirestore,
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
  ngOnInit(){
  }
}
