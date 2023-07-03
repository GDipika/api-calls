import { Component, OnInit } from '@angular/core';
import { ApiService, product } from '../api.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
public products!:product[];
  constructor( private _data:ApiService){}
  ngOnInit(): void {
    this._data.getData().subscribe((data:product[])=>{
    this.products=data;
    });
  }
}
