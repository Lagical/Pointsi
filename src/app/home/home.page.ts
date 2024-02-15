import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';
import { Instagram } from '@ionic-native/instagram/ngx';
import * as watermark from 'watermarkjs';
import { FbService } from '../fb.service'
import { Companies } from '../companies';
import { Users } from '../users';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  image: string = "assets/placeholder/logo.png";
  baseimg: string;
  company: string;
  companies: Companies;
  open: boolean;
  open1: boolean;
  open2: boolean = true;
  open3: boolean;
  open4: boolean = true;
  user: Users;
  star: number;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera,
    private loadingController: LoadingController,
    private instagram: Instagram,
    private db: FbService,
    private af: AngularFirestore,
    ) {}
    

    ngOnInit(){
      //get user from database
      this.db.getUser().subscribe(
        data => {
          this.user = data;
        }
      );
    }

  //method for capturing images and adding watermark
  async captureImage() {
    this.open= true;
    this.companies = this.db.selectedc;
    this.company = this.companies.company_name;
    this.camera.getPicture(this.options).then((imageData) => {
      this.baseimg = 'data:image/jpeg;base64,' + imageData;
    });
    const loading = await this.loadingController.create({
      message: 'Ladataan...',
      duration: 1
    });
    await loading.present();
    //adds watermark to taken picture
    watermark([this.baseimg])
    .image(watermark.text.center('#'+this.company+" "+"#Pointsi", '200px Josefin Slab', '#fff', 0.5))
    .then(img =>{
    this.image = img.src;
  })
  this.open = true;
  this.open2 = false;
  }

  /*method for adding points for user, by default 10 points is added for user
  and the transaction is logged to history*/
  addCredits(){
    const credits = this.user.credits + 10;
    this.af.doc(`users/${this.db.getUID()}`).update({
      credits
    });

    const pts = "+10";
    const comp = this.company;
    const time = new Date().toISOString();
    const rating = "Annetut tähdet: " + this.star;

    this.af.doc(`users/${this.db.getUID()}`).update({
      history: firestore.FieldValue.arrayUnion({
        comp,
        pts,
        time,
        rating
      })
    })
  }

  /*method for instagram image sharing and boolean values 
  to hide and display some buttons*/
  shareImage(){
    this.instagram.share(this.image);
    this.open1 = false;
    this.open3 = true;
    this.open4 = false;
  }

  //method that passes data to fb service to be updated to database
  addStar() {
    this.companies.stars.push(this.star);
    this.db.starsUpdate(this.companies);
    this.starsMedian();
    this.db.medianUpdate(this.companies);
    this.open = false;
  }

  //method for calculating median of the the ratings
  starsMedian(){
    this.companies.median = Math.round(this.companies.stars.reduce((a, b) => a + b) / this.companies.stars.length*10)/10
  }

  s1() {
    this.star = 1;
    this.open1 = true;
  }
  s2() {
    this.star = 2;
    this.open1 = true;
  }
  s3() {
    this.star = 3;
    this.open1 = true;
  }
  s4() {
    this.star = 4;
    this.open1 = true;
  }
  s5() {
    this.star = 5;
    this.open1 = true;
  }
}
