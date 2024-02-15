import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController) { }

  //alerts method that can be called when creating alerts on different pages
  async alerts(header: string, message: string, buttons: any[]){
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });
    await alert.present();
  }

  //toasts method that can be called when creating toasts on different pages
  async toasts(message: string, duration: number, position: any){
    const toast = await this.toastController.create({
      message,
      duration,
      position
    });
    toast.present();
  }
}
