import { Component, OnInit, Input } from '@angular/core';
import shave from 'shave';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() nom;
  @Input() description;
  @Input() prix;
  @Input() id;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      shave('.desc', 60);
    }, 100)
  }

}
