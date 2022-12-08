import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/sevices/plant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent implements OnInit {
plant!:plant;
  constructor(activatedRoute:ActivatedRoute, PlantService:PlantService,) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.plant=PlantService. getPlantById(params.id);


    })
  }

  ngOnInit(): void {
  }

}
