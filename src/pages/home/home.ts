import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  temp: string;
  icon: string;
  city: string = 'Vinnytsia';
  tempMax: string;
  tempMin: string;
  description: string;
  
  constructor(public navCtrl: NavController,public navParams: NavParams, private weatherService: WeatherProvider) {
    
  }

  ionViewWillEnter(){
    this.city =  this.weatherService.getCity();
    this.weatherService.getWeather(this.city)
      .subscribe((weather:any) => {
        this.weather = weather;
        this.temp = (+weather.main.temp - 273).toFixed(1) + " °C";
        this.icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        this.tempMax = (+weather.main.temp_max - 273).toFixed(1) + " °C";
        this.tempMin = (+weather.main.temp_min - 273).toFixed(1) + " °C";
        this.description = this.getFirstSybmolToUpperCase(weather.weather[0].description);
      })
      
  }

 

  getFirstSybmolToUpperCase(text) {
    return text.split(" ").map((word) => {
      return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
  }
  

}
