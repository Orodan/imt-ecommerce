import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket = []

  constructor() { }

  getTotal (): number {
    const reducer = (accumulator, beer) => accumulator + beer.price;
    return this.basket.reduce(reducer, 0)
  }

  add (beer: any):void {
    this.basket.push(beer)
    this.decreaseStock(beer)
  }

  decreaseStock(beer: any): void {
   beer.stock--;
  }

}
