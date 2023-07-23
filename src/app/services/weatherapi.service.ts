import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private httpClient: HttpClient) { }

  apiKey : String = "SUA API KEY";

  getWeatherData(location : String) : Observable<any> {
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&limit=1&appid=${this.apiKey}&lang=pt_br`);
  }
}
