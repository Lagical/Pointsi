import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from '../alert.service';
import { FbService } from '../fb.service'
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  password: string = "";
  cpassword: string = "";
  credits: number = 0;
  

  constructor(
    private afAuth: AngularFireAuth,
    private alertService: AlertService,
    private db: FbService,
    private router: Router,
    private menu: MenuController) { 
      
    }

  ionViewWillEnter() {
      this.menu.enable(false);
  }

  ionViewDidLeave() {
      this.menu.enable(false);
  }

  ngOnInit() {
    
  }

  async register(){
    const { username, password, cpassword, credits } = this
    //if password and password confirmation do not match displays error alert
    if(password != cpassword) {
      this.alertService.alerts("Virhe rekisteröitymisessä","Salasanat eivät täsmää",["Yritä uudelleen"])
      return
    }
    try {
      //tries to store user to database and create authentication
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@email.com', password)
      this.db.storeUser(result, username, credits)
      this.db.setUser({
        username,
        credits,
        uid: result.user.uid
      })
      //if registration in successful navigate to main page and display welcome message.
      this.alertService.toasts("Rekisteröityminen onnistui. Tervetuloa "+this.username+"!",4000, "middle")
      this.router.navigate(['/main'])
    } catch (err) {
      //if errors occurs displays correct error messages
      if(err.code === "auth/invalid-email") {
        this.alertService.alerts("Virhe rekisteröitymisessä","Käyttäjänimi puuttuu, anna käyttäjänimi",["Ok"])
      }
      if(err.code === "auth/weak-password") {
        this.alertService.alerts("Virhe rekisteröitymisessä","Salasanan tulee olla vähintään 6 merkkiä pitkä, anna pidempi salasana",["Ok"])
      }
      if(err.code === "auth/email-already-in-use") {
        this.alertService.alerts("Virhe rekisteröitymisessä","Käyttäjänimi on jo käytössä, anna eri käyttäjänimi",["Ok"])
      }
    }
  }
}
