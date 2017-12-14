import {Component,OnInit,Input,Output} from '@angular/core';

import {ActivatedRoute,RouterModule,Router} from "@angular/router";
import {DataService} from "../../data.service";
import {Product} from "../../shared/product.model";
import { ProductFormComponent } from "../product-form/product-form.component";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {}

  productdum = {};

  routingSubscription: any;

  addProduct(product: Product) {
    this.data.addProduct(product,
      product => {
        this.router.navigate(["products", product.department]);
      })
  }

  ngOnInit() {
    
  }

}
