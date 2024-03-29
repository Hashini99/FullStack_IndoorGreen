import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { userService } from 'src/app/services/user.service';
import { order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
order:order=new order();
checkoutForm!: FormGroup;
  constructor( cartService:CartService,
    private formBuilder:FormBuilder,
    private userService: userService,
    private toastrService: ToastrService,
    private orderService: OrderService ,
    private router: Router){

      const cart=cartService.getCart();
      this.order.items=cart.items;
      this.order.totalPrice=cart.totalPrice;
    }





  ngOnInit(): void {
    let {name, address,email} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name, Validators.required],
      address:[address, Validators.required],
      email:[email, Validators.required]
  });
}
  get fc(){
    return this.checkoutForm.controls;
  }
  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }



    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
    this.order.email = this.fc.email.value;

    console.log(this.order);
this.orderService.create(this.order).subscribe({
  next:() => {
    this.router.navigateByUrl('/payment');
  },
 error:(errorResponse) => {
    this.toastrService.error(errorResponse.error, 'error');
      }
    })
 }
}


