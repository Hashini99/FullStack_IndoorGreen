import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/sevices/plant.service';
import { plant } from 'src/app/shared/models/plant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  plant:plant[]=[];
  constructor(private plantService:PlantService){
    this.plant=plantService.getAll();

  }

  ngOnInit(): void {
  }

}
