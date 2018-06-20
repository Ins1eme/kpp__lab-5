import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';


@IonicPage()

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string = 'Vinnytsia';

  constructor(public navCtrl: NavController, private weatherService: WeatherProvider) {
  }
  
  onSubmit() {
    this.weatherService.setCity(this.city.slice(0,1).toUpperCase() + this.city.slice(1).toLocaleLowerCase());
  }
}
