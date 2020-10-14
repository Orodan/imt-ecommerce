import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  @Output()
  addToBasket = new EventEmitter();

  @Input()
  data: any;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.addToBasket.emit(this.data)
  }

}
