import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Domain/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  data: IProduct [] = [
    { 'unitPrice': 150, 'quantity': 2},
    { 'title': 'Souris Optique', 'unitPrice': 10.5, 'quantity': 5},
    { 'title': 'Ecran LED', 'unitPrice': 650, 'quantity': 1}
  ];
  constructor() { }

  ngOnInit() {
  }

}
