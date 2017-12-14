import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';

import { ActivatedRoute,RouterModule,Router } from "@angular/router";
import { DataService } from "../../data.service";
import { Product } from "../../shared/product.model";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private route:ActivatedRoute,private data:DataService,private router: Router) { }
  
  routingSubscription:any;

  @Input() productData:Product;
  @Output() onChange = new EventEmitter();
  @Output() onRemove = new EventEmitter();

  ngOnInit() { }

}
