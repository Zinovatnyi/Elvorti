import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { VideosPage } from '../videos/videos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuProducts: string;
  menuVideos: string;
  menuNews: string;

  constructor(public navCtrl: NavController){
    this.menuProducts = "Products";
    this.menuVideos = "Videos";
    this.menuNews = "News";
  }

  onProductPage(){
    this.navCtrl.push(ProductsPage);
  }

  onVideosPage(){
    this.navCtrl.push(VideosPage);
  }

}
