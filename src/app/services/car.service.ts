import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ObjectResponseModel } from '../models/objectResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newUrl=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
}
getCarsBrand(brandId:Brand):Observable<ListResponseModel<Car>>{
  let newUrl=this.apiUrl+"cars/getbybrandid?brandId="+brandId
  return this.httpClient.get<ListResponseModel<Car>>(newUrl)
}

getCarsColor(colorId:Color):Observable<ListResponseModel<Car>>{
  let newUrl=this.apiUrl+"cars/getbycolor?colorId="+colorId
  return this.httpClient.get<ListResponseModel<Car>>(newUrl)

}



}
