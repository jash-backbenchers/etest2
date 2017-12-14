import { Component, OnInit, Input, Output } from '@angular/core';

import { ActivatedRoute,RouterModule,Router } from "@angular/router";
import { DataService } from "../../data.service";
import { Product } from "../../shared/product.model";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private data:DataService,private router: Router) { }
  
  product:Product;
  routingSubscription:any;

  
  updateProduct(product:Product){
    this.data.updateProduct(product,
    product => {
      this.product=product;
      this.router.navigate(["products",product.department]);
    })
  }

  delProduct(product:Product){
    this.data.delProduct(product._id,
    product => {
      this.router.navigate(["products",product.department]);
    })
  }

  ngOnInit() {
    this.routingSubscription=this.route.params
    .subscribe( params => 
      this.data.getProduct(params["id"],
      list => {
        this.product=list;
      })
    );
  }

}
