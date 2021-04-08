import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageResponseModel } from '../models/carImageResponseModel';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44351/api/carimages/getall"
  imageUrl:any ='https://localhost:44351/'

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<CarImageResponseModel>{
    return this.httpClient.get<CarImageResponseModel>(this.apiUrl);
}




}
