
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Component, OnInit} from '@angular/core';
import {  JsonParsing } from '../../providers/json-parsing';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GithubUsers } from '../../providers/github-users';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
  providers: [GithubUsers]
})
export class ProductPage implements OnInit{
characterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  allCategories = [];
  categorisedAllCategory = [];
  public items:any;
  products: Array<any>;

  strings:Array<string>;
  selected:string;

  constructor(public navCtrl: NavController,private githubUsers: GithubUsers) {
  

  }

ngOnInit() {
    this.getAllCategory();
  }
 ScrollTo(eID) {
    var element = document.getElementById(eID)
    var alignWithTop = true;
    element.scrollIntoView(alignWithTop);
  }

getAllCategory() {
    this.githubUsers.getAllCategory()
      .then((data)=> {
        if (data.status == 1) {
          this.allCategories = data.response.category;
          //console.log(data.response.category);
          this.strings = new Array<string>();

          for (var char of this.characterArray) {
            var obj:any = {};
            obj.categoryName = char;
            var arr = [];
            var i = 0;
            for (var category of this.allCategories) {

              if (category.name!=null && category.name!=undefined && category.name!='') {
              if(category.name.charAt(0) == char) {
                arr.push(category);
                
                this.strings.push(category);
                console.log(category);

              }
              }
              i++;
            }
            
            obj.items = arr;
            
            if(obj.items.length>0) {
              this.categorisedAllCategory.push(obj);
            }
          }
          var obj:any  = {};
          obj.categoryName = '';
          var arr=[];
          for(var category of this.allCategories){
            var flag= true;
            for(var pushedCategories of this.categorisedAllCategory){
              for(var pushedCategory of pushedCategories.items){
                if(pushedCategory.id==category.id){
                  flag=false;
                }
              }
            }
            if(flag){
              arr.push(category)
            }
          }
          obj.items = arr;
          if(obj.items.length>0){
            this.categorisedAllCategory.unshift(obj);
          }
        }
      })
     // console.log(this.categorisedAllCategory);
  }

  ionViewDidLoad() {
    console.log('Hello ProductPage Page');
  }


}
