import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesGraphRoutingModule } from './moviesGraph-routing.module';
import { MoviesGraphComponent } from './moviesGraph.component';
import { ChartsModule } from 'ng2-charts';
import { DemoMaterialModule } from '../material-module/material-module';



@NgModule({
  declarations: [MoviesGraphComponent],
  imports: [
    CommonModule,
    MoviesGraphRoutingModule,
    ChartsModule,
    DemoMaterialModule
  ],
  exports:[]
})
export class MoviesGraphModule { }
