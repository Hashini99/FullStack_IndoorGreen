import { plant } from "./plant";

export class cartitem{
  constructor(public plant:plant){ }
  quantity:number = 1 ;
  price: number = this.plant.price;
}
