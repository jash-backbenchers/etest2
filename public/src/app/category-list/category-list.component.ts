import { Component, OnInit } from '@angular/core';
import { Category } from "../shared/category.model";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  catlist:[Category];

  constructor(private data:DataService,private router: Router) {

   }

  goProducts(cat){
    this.router.navigate(["products",cat]);
  }

  ngOnInit() {
    this.data.getCategories(list => {
      this.catlist=list;
    })
  }

}
