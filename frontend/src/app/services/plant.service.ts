import { Injectable } from '@angular/core';
//import { sample_plants } from 'src/data';
import { plant } from '../shared/models/plant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { plantID_url, plants_url } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http:HttpClient) { }

  getAll():Observable<plant[]>{
    return this.http.get<plant[]>(plants_url);
  }

  //SEARCH

  getPlantById(plantId:string):Observable<plant>{
    return this.http.get<plant>(plantID_url+plantId);
  }
}
