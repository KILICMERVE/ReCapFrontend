import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {


  carImages:CarImage[]=[];
  imageUrl:string ='https://localhost:44351'
  constructor(private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.getCarImages();
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response => {
      this.carImages=response.data
    })
  }



}
