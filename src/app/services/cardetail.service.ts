import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl = "https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number):Observable<ObjectResponseModel<CarDetail[]>>{
    let path=this.apiUrl+ "cars/getcardetailsbyid?carid=" + carId
    return this.httpClient.get<ObjectResponseModel<CarDetail[]>>(path);
  }
}
