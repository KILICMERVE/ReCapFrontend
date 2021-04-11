import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { CardetailService } from 'src/app/services/cardetail.service';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { ToastrService } from 'ngx-toastr';
//import { threadId } from 'worker_threads';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  car:CarDetail={carId:0,carName:"",brandName:"",colorName:"",modelYear:"",dailyPrice:0,descriptions:"",image:"",success:true,message:""};
  carRentalForm:FormGroup;
  Id:number;
  imageUrl:string ='https://localhost:44351'
  constructor(private rentalService:RentalService,private formBuilder:FormBuilder,private carDetailService:CardetailService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.Id=params['carId']
        this.getCarDetails(params['carId']);
        
      }
    });
    this.createCarRentalForm();
    
  }

  createCarRentalForm(){
      this.carRentalForm=this.formBuilder.group({
        carId:[this.Id],
        customerId:[""],
        rentDate:[""],
        returnDate:[""]
      })
  }

  getCarDetails(carId:number){
    
    this.carDetailService.getCarDetails(carId).subscribe(response=>{
      this.car=response.data[0]
   
    })
  }

  add(){
    if(this.carRentalForm.valid){
      let rentModel = Object.assign({},this.carRentalForm.value)
      console.log(rentModel)
      if(rentModel){
        this.rentalService.add(rentModel).subscribe(response=>{
          console.log(response.message,"Araç kiralama işlemi başarılı")
        })
      }

     
    }else{
      this.toastrService.error("Bir hata oluştu")
    }
    
     

  }

}
