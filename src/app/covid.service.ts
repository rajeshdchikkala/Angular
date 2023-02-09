import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient: HttpClient) { }

  public getCovidData():Observable<any>{
    return this.httpClient.get("https://api.covid19api.com/summary");
  }

  public getCountryData():Observable<any>{
    return this.httpClient.get("https://restcountries.com/v3.1/all");
  }

}
