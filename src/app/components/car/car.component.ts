import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];

  currentCar:Car;
  dataLoaded=false;
 
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private cardetailService:CardetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsBrand(params["brandId"]);
      }
      if(params["colorId"]){
        this.getCarsColor(params["colorId"]);
      }
      else{
        this.getCars();
    
        
      }
    })
  }

  getCars(){
     this.carService.getCars().subscribe(response => {
       this.cars = response.data;
       this.dataLoaded=true;
     })
  }

  setCurrentCar(car:Car){
    this.currentCar=car; 
   
  }

  getCarsBrand(brandId:Brand){
    this.carService.getCarsBrand(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }



  getCarsColor(colorId:Color){
    this.carService.getCarsColor(colorId).subscribe(response=>{
      this.cars=response.data
    })
  }
}
