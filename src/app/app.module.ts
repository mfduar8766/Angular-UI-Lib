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
  DynamicFormModule,
  CommonMultiSelectModule,
  CommonSplitButtonModule,
  CommonSelectModule,
  LocalStorageModule,
  CommonSliderModule,
  CommonTableModule,
  CommonPaginatorModule,
  CommonSideBarModule
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
    CommonMultiSelectModule,
    CommonSearchModule,
    CommonSelectModule,
    CommonSplitButtonModule,
    CommonTabModule,
    DynamicFormModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    CommonSliderModule,
    CommonTableModule,
    CommonPaginatorModule,
    CommonSideBarModule
  ],
  providers: [LocalStorageModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
