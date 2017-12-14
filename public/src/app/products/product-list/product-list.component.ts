import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../data.service";
import { Product } from "../../shared/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private data:DataService) { }

  productList:[Product];

  routingSubscription:any;

  ngOnInit() {
    this.routingSubscription=this.route.params
                                  .subscribe( params => 
                                    this.data.getProducts(params["cat"],
                                    list => {
                                      this.productList=list;
                                    })
                                  );
  }

}
