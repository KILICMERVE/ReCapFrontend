import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand:Brand;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
    
  }

  getBrands(){
      this.brandService.getBrands().subscribe(response => {
      this.brands =response.data
    })
  }

  
  setCurrentBrand(brand:Brand){
      this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(this.currentBrand==brand)
    {
      return "list-group-item list-group-item-action list-group-item-secondary"
    }
    else{
      return "list-group-item list-group-item-action list-group-item-light"
    }
  }

  setCurrentAllBrand(){
    
    if(this.currentBrand){
      return "list-group-item list-group-item-action list-group-item-light"
    }else{
      return "list-group-item list-group-item-action list-group-item-secondary"
    }
  }

}
