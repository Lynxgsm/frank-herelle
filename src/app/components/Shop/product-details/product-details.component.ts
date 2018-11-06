import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { url } from '../../../config';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  nom: string;
  description: string;
  qte: string;
  prix: string;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    axios.get(url + `produits/${this.route.snapshot.paramMap.get('id')}`).then(response => {
      console.log(response.data);
      this.nom = response.data.nom;
      this.description = response.data.description;
      this.prix = response.data.prix;
      this.qte = response.data.qte;
    }).catch(err => {
      console.log(err);
    });
  }


}
