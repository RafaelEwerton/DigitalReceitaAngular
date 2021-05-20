import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { FarmaciasModule } from './farmacias/farmacias.module';
import { FormsModule } from '@angular/forms';
import { FarmaciasService} from './farmacias.service'
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    FarmaciasModule,
    FormsModule


  ],
  providers: [
    FarmaciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
