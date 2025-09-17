import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-cart',
   imports: [RouterOutlet, RouterModule,CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
 @Output() addToCartEvent = new EventEmitter<any>();

   product = [
    { id: 1, name: "Laptop", price: 80000, stock:5},
    { id: 2, name: "Phone", price: 25000, stock:0},
    { id: 3, name: "Camera", price: 60000, stock:9},
    { id: 4, name: "Headphone", price: 2000, stock:1},
    { id: 5, name: "Ipad", price: 100000, stock:2},
  
  ];

  addToCart(item: any) {
    if (item.stock > 0) {
      this.addToCartEvent.emit(item);
      item.stock--;
    } else {
      alert('Out of stock!');
    }
  }
}