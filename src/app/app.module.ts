import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { WeatherService } from '../services/weather.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnimationCity } from '../components/weather/city.component';
import { AnimationCloudDark } from '../components/weather/cloud-dark.component';
import { AnimationCloud } from '../components/weather/cloud.component';
import { AnimationDescription } from '../components/weather/description.component';
import { AnimationMist } from '../components/weather/mist.component';
import { AnimationMoon } from '../components/weather/moon.component';
import { AnimationRain } from '../components/weather/rain.component';
import { AnimationSnow } from '../components/weather/snow.component';
import { AnimationStars } from '../components/weather/stars.component';
import { AnimationSun } from '../components/weather/sun.component';
import { AnimationTemperature } from '../components/weather/temperature.component';
import { AnimationThunder } from '../components/weather/thunder.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimationCity,
    AnimationCloudDark,
    AnimationCloud,
    AnimationDescription,
    AnimationMist,
    AnimationMoon,
    AnimationRain,
    AnimationSnow,
    AnimationStars,
    AnimationSun,
    AnimationTemperature,
    AnimationThunder
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    WeatherService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
