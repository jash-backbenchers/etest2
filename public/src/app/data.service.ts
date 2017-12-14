import { Category } from './shared/category.model';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class DataService {
  
  public endpoint="http://localhost:3000/api";

  constructor(private http: Http) {}
  
                    //////////////////////////////////////
                    // getting categories in home route //
                    //////////////////////////////////////

  getCategories(callback) {
    this.http.get(`${this.endpoint}/categories`)
        .subscribe( response => callback(response.json()) )
  }

                    ////////////////////////////////////////
                    // getting products in products route //
                    ////////////////////////////////////////

  getProducts(cat,callback) {
    this.http.post(`${this.endpoint}/products`,{department:cat})
    .subscribe( response => callback(response.json()) )
  }

                      ////////////////////////////
                      // product crud operations//
                      ////////////////////////////
                      
  addProduct(product,callback) {
    this.http.post(`${this.endpoint}/product`,{product:product})
    .subscribe( response => callback(response.json()) )
  }

  getProduct(id,callback) {
    this.http.get(`${this.endpoint}/product/${id}`)
    .subscribe( response => callback(response.json()) )
  }

  updateProduct(product,callback) {
    console.log(product);
    this.http.put(`${this.endpoint}/product`,{product:product})
    .subscribe( response => callback(response.json()) )
  }

  delProduct(id,callback) {
    this.http.delete(`${this.endpoint}/product/${id}`)
    .subscribe( response => callback(response.json()) )
  }

}
