import { Injectable } from '@angular/core';
import { sample_plants } from 'src/data';
import { plant } from '../shared/models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor() { }

  getAll():plant[]{
    return sample_plants;
  }
  getPlantById(plantId:string):plant{
    return this.getAll().find(plant=>plant.id==plantId)?? new plant();
  }
}
