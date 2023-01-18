//import { LatLng } from "leaflet";
import { cartitem } from "./cartitem";


export class order{
  id!:number;
  items!: cartitem[];
  totalPrice!:number;
  name!: string;
  address!: string;

  paymentId!: string;
  createdAt!: string;
  status!: string;
  //addressLatLng: any;
}
