import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  colors:Color[]=[];
  brands:Brand[]=[];
  currentColor:Color;
  currentBrand:Brand;
  constructor(private colorService:ColorService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=> {
      this.colors=response.data
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=> {
      this.brands=response.data
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }
  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  getCurentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item list-group-item-action list-group-item-secondary"
    }else{
      return "list-group-item list-group-item-action list-group-item-light"
    }
  }

  setCurrentAllColor(){
    
    if(this.currentColor){
      return "list-group-item list-group-item-action list-group-item-light"
    }else{
      return "list-group-item list-group-item-action list-group-item-secondary"
    }
  }

  

}
