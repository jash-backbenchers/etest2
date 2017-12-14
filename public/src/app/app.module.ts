import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Routes,RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MatGridListModule,MatGridTile,MatButtonModule,MatInputModule,MatIconModule,MatSelectModule,MatCardModule,MatToolbarModule } from "@angular/material";

import { AppComponent } from './app.component';

import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { SharedComponent } from './shared/shared.component';
import { DataService } from "./data.service";
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductAddComponent } from './products/product-add/product-add.component';

const routes: Routes =[
  {path:"",component: CategoryListComponent},
  {path:"products/:cat",component:ProductListComponent},
  {path:"edit/:id",component:ProductEditComponent},
  {path:"new",component:ProductAddComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductComponent,
    SharedComponent,
    ProductEditComponent,
    ProductFormComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatGridListModule,MatButtonModule,MatInputModule,MatIconModule,MatSelectModule,MatCardModule,MatToolbarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
