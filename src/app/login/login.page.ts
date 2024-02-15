import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from '../alert.service';
import { FbService } from '../fb.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  username: string = "";
  password: string = "";
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

  async login(){
    const { username, password, credits } = this
    //tries to log in by using the information user gave, if successful set user and navigate to main
    try {
        const result = await this.afAuth.auth.signInWithEmailAndPassword(username + '@email.com', password)
        if(result.user){
          this.db.setUser({
            username,
            credits,
            uid: result.user.uid
          })
          this.router.navigate(['/main'])
        }
    } catch(err) {
      //if the information does not match or is invalid error message is displayed
      if(err.code === "auth/user-not-found") {
        this.alertService.alerts("Virhe kirjautumisessa","Käyttäjänimi tai salasana on virheellinen",["Yritä uudelleen"])
      }
      if(err.code === "auth/invalid-email") {
        this.alertService.alerts("Virhe kirjautumisessa","Käyttäjänimi puuttuu, anna käyttäjänimi",["Ok"])
      }
      if(err.code === "auth/wrong-password") {
        this.alertService.alerts("Virhe kirjautumisessa","Salasana puuttuu, lisää salasana",["Ok"])
      }
    }
  }
}
