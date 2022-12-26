import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { plant } from 'src/app/shared/models/plant';
import { Server } from 'http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  plant:plant[]=[];
  constructor(private plantService:PlantService,activatedRoute: ActivatedRoute){
    let plantssObservalbe:Observable<plant[]>;

    plantssObservalbe=plantService.getAll();

    plantssObservalbe.subscribe((ServerPlants)=>{

      this.plant=ServerPlants
    })

  }

  ngOnInit(): void {
  }

}
