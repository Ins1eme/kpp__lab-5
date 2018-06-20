import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()

export class WeatherProvider{

  city: string = "Vinnytsia";
  apiKey = '1b5ee5a1a74d624a74750350327ea372';
  
  constructor(public http: HttpClient) {

  }

  getWeather(city) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);
  }

  getCity() {
    return this.city;
  }

  setCity(city: string) {
    this.city = city;
  }
  
}
