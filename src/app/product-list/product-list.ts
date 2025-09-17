import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [RouterOutlet, RouterModule,CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
   product = [
    { id: 1, name: "Laptop", price: 80000, stock:5},
    { id: 2, name: "Phone", price: 25000, stock:0},
    { id: 3, name: "Camera", price: 60000, stock:9},
    { id: 4, name: "Headphone", price: 2000, stock:1},
    { id: 5, name: "Ipad", price: 100000, stock:2},
  
    ];
  
  }

