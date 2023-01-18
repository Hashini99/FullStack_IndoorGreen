import {Schema, model} from 'mongoose';

export interface plant{
    id:string;
    name:string;
    price:number;
   
    imageUrl: string;
    description:string;
    
}

export const PlantSchema = new Schema<plant>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
       
        imageUrl: {type: String, required:true},
       
       description:{type: String, required:true}
      
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const PlantModel = model<plant>('plant', PlantSchema);