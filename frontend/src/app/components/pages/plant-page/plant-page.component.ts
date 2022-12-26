import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { plant } from 'src/app/shared/models/plant';
import { cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent implements OnInit {
plant!:plant;

  constructor(activatedRoute:ActivatedRoute, PlantService:PlantService,
    private cartservice:CartService, private router:Router) {


      activatedRoute.params.subscribe((params) => {
      if(params.id)
    PlantService. getPlantById(params.id).subscribe(serverPlants => {
      this.plant = serverPlants;


    });
  })
    }
  ngOnInit(): void {
  }
  addToCart(){
    this.cartservice.addToCart(this.plant);
    this.router.navigateByUrl('/cartpage');
  }
}
