import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { cart } from '../shared/models/cart';
import { cartitem } from '../shared/models/cartitem';
import { plant } from '../shared/models/plant';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart);

  constructor() { }



  addToCart(plant: plant): void {


    let cartItem = this.cart.items
      .find(item => item.plant.id === plant.id);
    if (cartItem)
      return;

    this.cart.items.push(new cartitem(plant));
    this.setCartToLocalStorage();
}
removeFromCart(plantId: string): void {
  this.cart.items = this.cart.items
    .filter(item => item.plant.id != plantId);
  this.setCartToLocalStorage();
}


changeQuantity(plantId: string, quantity: number) {
  let cartItem = this.cart.items
    .find(item => item.plant.id === plantId);
  if (!cartItem) return;

  cartItem.quantity = quantity;
  cartItem.price = quantity * cartItem.plant.price;
  this.setCartToLocalStorage();
}



clearCart() {
  this.cart = new cart();
  this.setCartToLocalStorage();
}



getCartObservable(): Observable<cart> {
  return this.cartSubject.asObservable();
}



getCart(): cart{
  return this.cartSubject.value;
}



private setCartToLocalStorage(): void {
  this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
  this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

  const cartJson = JSON.stringify(this.cart);
  localStorage.setItem('Cart', cartJson);
  this.cartSubject.next(this.cart);
}



private getCartFromLocalStorage(): cart {
  const cartJson = localStorage.getItem('Cart');
  return cartJson ? JSON.parse(cartJson) : new cart();
}
}
