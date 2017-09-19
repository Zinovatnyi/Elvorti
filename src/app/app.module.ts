import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Push } from '@ionic-native/push';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductsPage } from '../pages/products/products';
import { VegaPage } from '../pages/vega/vega';
import { VestaPage } from '../pages/vesta/vesta';
import { AstraPage } from '../pages/astra/astra';
import { PalladaPage } from '../pages/pallada/pallada';
import { AntaresPage } from '../pages/antares/antares';
import { VideosPage } from '../pages/videos/videos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductsPage,
    VegaPage,
    VestaPage,
    AstraPage,
    PalladaPage,
    AntaresPage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductsPage,
    VegaPage,
    VestaPage,
    AstraPage,
    PalladaPage,
    AntaresPage,
    VideosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
