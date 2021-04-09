import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';

import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  car:CarDetail={carId:0,carName:"",colorName:"",brandName:"",modelYear:"",dailyPrice:0,descriptions:"",image:"",success:true,message:""};
 
  constructor(private cardetailService:CardetailService,private activatedRoute:ActivatedRoute) { }
  imageUrl:string ='https://localhost:44351'
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
        
      }
    });
  }

  getCarDetails(carId:number){
    this.cardetailService.getCarDetails(carId).subscribe(response=>{
      this.car=response.data[0]
   
    })
  }
  
}
