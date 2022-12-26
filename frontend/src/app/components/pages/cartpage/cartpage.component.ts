import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from 'src/app/shared/models/cart';
import { cartitem } from 'src/app/shared/models/cartitem';
@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart!: cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }
  removeFromCart(cartItem:cartitem){
    this.cartService.removeFromCart(cartItem.plant.id);
  }

  changeQuantity(cartItem:cartitem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.plant.id, quantity);
  }

}
