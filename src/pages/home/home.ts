import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { WeatherService } from '../../services/weather.service';
import { LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherData = null;

  constructor(private geolocation: Geolocation, private weatherService: WeatherService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

    let loading = this.loadingCtrl.create({content: 'Searching your location...'});
    loading.present();

    this.geolocation.getCurrentPosition().then((resp) => {
      loading.dismiss();
      loading = this.loadingCtrl.create({content: 'Loading weather information...'});
      loading.present();
      this.weatherService.getWeather(resp.coords).subscribe(data => {
        loading.dismiss();
        this.weatherData = data
      }, error => {
        loading.dismiss();
        let toast = this.toastCtrl.create({message: error, duration: 3000});
        toast.present();
      });
    }).catch((error) => {
      loading.dismiss();
      let toast = this.toastCtrl.create({message: error, duration: 3000});
      toast.present();
    });
  }

  getState(name) {
    return this.weatherService.getIconState(this.weatherData, name)
  }

  isDay() {
    return this.weatherService.isDay(this.weatherData)
  }

  isNight() {
    return this.weatherService.isNight(this.weatherData)
  }
}
