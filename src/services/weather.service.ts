import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(coords) {
    let url = `${ConfigService.API_ENDPOINT}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${ConfigService.API_KEY}&units=metric`
    return this.http.jsonp(url, 'callback');
  }

  getIconState(weather, name) {
    let code = weather ? weather.weather[0].icon.slice(0, -1) : null
    if(name == 'stars' && this.isDay(weather)) { return 'none' }
    if(name == 'sun' && this.isNight(weather)) { return 'none' }
    if(name == 'moon' && this.isDay(weather)) { return 'none' }
    if(ConfigService.STATES[code]) { return ConfigService.STATES[code][name] || 'none' }
    return 'none'
  }

  isDay(weather) {
    if(weather) { return weather.weather[0].icon[2] == 'd' }
    return false
  }

  isNight(weather) {
    if(weather) { return weather.weather[0].icon[2] == 'n' }
    return false
  }
}