import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  CommonButtonModule,
  CommonModalModule,
  CommonCardModule,
  CommonSearchModule,
  CommonTabModule,
  CommonTableModule
} from 'src/lib/public_api';
import { PrimeNgModule } from '../lib/PrimeNgModules.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonButtonModule,
    CommonCardModule,
    CommonModalModule,
    CommonSearchModule,
    CommonTabModule,
    CommonTableModule,
    FormsModule, ReactiveFormsModule,
    PrimeNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
