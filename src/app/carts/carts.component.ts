import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService, cart } from '../api.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  @Output() emitData:EventEmitter<any> = new EventEmitter();
  public carts: cart[] = [];
  constructor(private _data: ApiService) {}
  ngOnInit(): void {
    this._data.cartdata().subscribe((carts: cart[]) => {
      this.carts = carts;
    });
  }
}
