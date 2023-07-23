import { Component } from '@angular/core';
import { WeatherapiService } from './services/weatherapi.service';
import { faLocationDot, faSearch, faWind, faDroplet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  weatherData !: any;
  apiCountryUrl !: string;
  weatherIconUrl !: string;
  cityName !: string;
  weatherDescription !: string;

  faLocationDot = faLocationDot;
  faSearch = faSearch;
  faWind = faWind;
  faDroplet = faDroplet;

  constructor(private weatherService: WeatherapiService) { }

  ngOnInit(): void {
    this.findWeather("porto alegre");
  }

  searchCityWeather() {
    if (this.cityName.trim() !== '') {
      this.findWeather(this.cityName);
    }
  }

  findWeather(location: String) {
    this.weatherService.getWeatherData(location).subscribe(data => {
      this.weatherData = data;
      this.weatherDescription = this.capitalizeFirstLetters(data.weather[0].description);
      this.apiCountryUrl = "https://flagcdn.com/w80/" + data.sys.country.toLowerCase() + '.png';
      this.weatherIconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + '.png';
    });
  }

  capitalizeFirstLetters(str : String) {
    return str.replace(/\b\w/g, (match) => match.toLocaleLowerCase()).replace(/^\w/, (match) => match.toUpperCase());
  }
}
