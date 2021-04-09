import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  colors:Color[]=[];
  currentColor:Color;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=> {
      this.colors=response.data
    })
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
