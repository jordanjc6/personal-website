import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxTranslateModule } from '@rxweb/translate';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';

declare var multiLangConfig: any;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    RxTranslateModule.forRoot(multiLangConfig),
  ],
  providers: [RxTranslateModule],
  bootstrap: [AppComponent],
  exports: [RxTranslateModule]
})
export class AppModule { }
