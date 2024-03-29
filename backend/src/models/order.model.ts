import {model, Schema, Types} from 'mongoose';
import { plant, PlantSchema } from './plant.model';
import { orderstatus } from '../constants/order_sta';



export interface OrderItem{
    plant: plant;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        plant:{type: PlantSchema , required: true},
        price:{ type: Number, required:true},
        quantity: {type: Number, required: true}
        
    }
);

export interface Order{
    id:string;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    address: string;
    paymentId: string;
    status: orderstatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
  }

  const orderSchema = new Schema<Order>({
      name: {type: String, required: true},
      address: {type: String, required: true},
      paymentId: {type: String},
      totalPrice: {type: Number, required: true},
      items: {type: [OrderItemSchema], required: true},
      status: {type: String, default: orderstatus.NEW},
      user: {type: Schema.Types.ObjectId, required: true}
  },{
      timestamps: true,
      toJSON:{
          virtuals: true
      },
      toObject:{
          virtuals: true
      }
  });

  export const OrderModel = model('order', orderSchema);