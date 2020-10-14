import { Component, Input } from '@angular/core';
import { BasketService } from './basket.service';
import { BeersService } from './beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title: string = 'Bienvenue sur IMT Ecommerce';  

  constructor (private beerService: BeersService, private basketService: BasketService) {
  }
  
  get beers() {
    return this.beerService.beers;
  }

  get total() {
    return this.basketService.getTotal()
  }
    
  add (beer: any):void {
    this.basketService.add(beer)
  }

}
