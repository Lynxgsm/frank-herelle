import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { url } from '../../config'; import shave from 'shave';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = [];
  constructor() { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    axios.get(url + 'categories').then(response => {
      this.products = response.data;
    }).catch(err => {
      console.log(err);
    });
  }

  getAllProducts() {
    axios.get(url + 'produits').then(response => {
      console.log(response.data);
      response.data.forEach(data => {
        this.products.push(data);
      });

      shave('.desc', 30);
    }).catch(err => {
      console.log(err);
    });
  }

}
