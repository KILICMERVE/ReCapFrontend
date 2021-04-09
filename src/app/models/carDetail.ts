import { ResponseModel } from "./responseModel";

export interface CarDetail extends ResponseModel{
    carId:number,
    carName:string,
    brandName:string,
    colorName:string,
    modelYear:string,
    dailyPrice:number,
    descriptions:string,
    image:string
}