import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { userService } from 'src/app/services/user.service';
import { user } from 'src/app/shared/models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// [x: string]: any;

  cartQuantity=0;
  user!:user;

  constructor(cartService:CartService,private userService:userService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}


