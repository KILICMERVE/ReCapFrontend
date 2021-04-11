import { ListResponseModel } from "./listResponseModel";

export interface Rental{
    //rentalId:number,
    carId:number,
    customerId:number,
    rentDate:string,
    returnDate:string
}