import { Component, OnInit } from '@angular/core';
import { MenuController, IonRouterOutlet } from '@ionic/angular';
import { FbService } from '../fb.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertService } from '../alert.service';
import { firestore } from 'firebase/app';
import { Users } from '../users';
import { Companies } from '../companies';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  user: any;
  userd: Users;
  points: number [] = [];
  point: number = 20;
  companies: Companies [];
  company: string = "";

  constructor(
    private routerOutlet: IonRouterOutlet,
    private af: AngularFirestore,
    private alertService: AlertService,
    private menu: MenuController,
    private db: FbService) {
      //get data in real time from database to this.user to be displayed on app
      const user = af.doc(`users/${this.db.getUID()}`)
      this.user = user.valueChanges();
    }

  ngOnInit() {
    //get user from database (this will be called a lot to get up to date data after changes to points are made)
    this.db.getUser().subscribe(
      data => {
        this.userd = data;
      }
    );
    //get companies from database
    this.db.getCompanies().subscribe(
      data => {
        this.companies = data;
      }
    );
    for(let i = 20; i <= 100; i += 5){
      this.points.push(i);
    }
  }

  ionViewWillEnter() {
    this.routerOutlet.swipeGesture = false
    this.db.getUser().subscribe(
      data => {
        this.userd = data;
      }
    );
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(false);
  } 

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  //method for removing points from user
  async ptsConf(){
    this.db.getUser().subscribe(
      data => {
        this.userd = data;
      }
    );
    /*checks if user has enough points to spend and if company is selected
     if not displays correct error message if*/
    if(this.userd.credits < this.point){
      this.alertService.alerts("Virhe","Ei tarpeeksi pisteitä",["Ok"])
    } else if(this.company === ""){
      this.alertService.alerts("Virhe","Valitse yritys",["Ok"])
    } else {
      this.alertService.alerts("Hyväksy ostos","Oletko varma?",[{
      text: 'En, peruuta',
      role: 'cancel',
    }, {
      text: 'Kyllä, hyväksyn',
      /*if user accepts, the selected amount of points is reduced 
      from the user and the transaction is logged to history*/
      handler: () => {
        const credits = this.userd.credits - this.point;
        this.af.doc(`users/${this.db.getUID()}`).update({
          credits
        });
        this.db.getUser().subscribe(
          data => {
            this.userd = data;
          }
        );
        const pts = "-"+this.point;
        const comp = this.company;
        const time = new Date().toISOString();

        this.af.doc(`users/${this.db.getUID()}`).update({
          history: firestore.FieldValue.arrayUnion({
            comp,
            pts,
            time
          })
        })
      }
    }])
    }
  }
}
