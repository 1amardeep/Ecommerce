import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule  } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { SliderOverviewExample } from './components/angular-material/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SliderOverviewExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  entryComponents: [SliderOverviewExample],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
