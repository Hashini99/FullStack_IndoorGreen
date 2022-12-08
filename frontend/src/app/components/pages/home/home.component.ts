import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from 'src/app/sevices/plant.service';
import { plant } from 'src/app/shared/models/plant';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  plant:plant[]=[];
  constructor(private plantService:PlantService,activatedRouter:ActivatedRoute){
    activatedRouter.params.subscribe((params)=>{
      if(params.search_term)
      this.plant=this.plantService.getAllPlantsBySearchTerm(params.search_term);
      else
      this.plant=plantService.getAll();
    })
    this.plant=plantService.getAll();

  }

  ngOnInit(): void {
  }

}
