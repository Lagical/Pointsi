import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate: any;

  constructor(
    private platform: Platform,
    private afAuth: AngularFireAuth,
    private navController: NavController,
    private splashScreen: SplashScreen){
      //disables androids default back button
      this.platform.backButton.subscribeWithPriority(0, () => {});
      this.sitemenu();
      //checks if there is user logged in, if there is logged user they get redirected to main instead of login page.
      this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid){
        this.navController.navigateRoot(['main']);
        this.splashScreen.hide();
    } else {
        this.navController.navigateRoot(['login']);
        this.splashScreen.hide();
    }
  });
  }

  sitemenu() {
    this.navigate =
    [
      {
        title : "Profiili",
        url   : "/profile",
        icon  : "person-circle-outline"
      },
      {
        title : "Historia",
        url   : "/points",
        icon  : "swap-horizontal-outline"
      },
      {
        title : "Tietoa Pointsista",
        url   : "/info",
        icon  : "information-circle-outline"
      },
      {
        title : "Käyttöehdot ja tietosuojaseloste",
        url   : "/tos",
        icon  : "shield-checkmark-outline"
      },
      {
        title : "Ota yhteyttä",
        url   : "/contact",
        icon  : "mail-outline"
      }
    ]
  }
}
