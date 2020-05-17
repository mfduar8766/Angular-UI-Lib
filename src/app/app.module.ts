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
  CommonTableModule,
  DynamicFormModule,
  CommonMultiSelectModule,
  CommonSplitButtonModule,
  CommonSelectModule,
  CommonCounterModule,
  LocalStorageModule,
  CommonSliderModule,
  CommonTableTwoModule,
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
    CommonTableModule,
    DynamicFormModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    CommonCounterModule,
    CommonSliderModule,
    CommonTableTwoModule,
    CommonPaginatorModule,
    CommonSideBarModule
  ],
  providers: [LocalStorageModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
