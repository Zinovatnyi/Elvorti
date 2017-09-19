import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VegaPage } from '../vega/vega';
import { VestaPage } from '../vesta/vesta';
import { AstraPage } from '../astra/astra';
import { PalladaPage } from '../pallada/pallada';
import { AntaresPage } from '../antares/antares';

/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  onVegaPage(){
    this.navCtrl.push(VegaPage);
  }

  onVestaPage(){
    this.navCtrl.push(VestaPage);
  }

  onAstraPage(){
    this.navCtrl.push(AstraPage);
  }

  onPalladaPage(){
    this.navCtrl.push(PalladaPage);
  }

  onAntaresPage(){
    this.navCtrl.push(AntaresPage);
  }


}
