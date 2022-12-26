import { Injectable } from '@angular/core';
import { sample_plants } from 'src/data';
import { plant } from '../shared/models/plant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PLANTS_BY_ID_URL, PLANTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http:HttpClient) { }

  getAll():Observable<plant[]>{
    return this.http.get<plant[]>(PLANTS_URL);
  }

  //SEARCH
  //TAG
  //ID
  getPlantById(plantId:string):Observable<plant>{
    return this.http.get<plant>(PLANTS_BY_ID_URL+plantId);
  }
}
