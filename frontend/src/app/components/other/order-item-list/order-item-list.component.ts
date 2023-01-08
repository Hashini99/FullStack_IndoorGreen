import { Component, Input, OnInit } from '@angular/core';
import { order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.css']
})
export class OrderItemListComponent implements OnInit {
@Input()
order!:order;
  constructor() { }

  ngOnInit(): void {
  }

}
