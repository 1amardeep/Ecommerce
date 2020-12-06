import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { ChartsModule } from 'ng2-charts';
import { DemoMaterialModule } from 'src/app/material-module';



@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ChartsModule,
    DemoMaterialModule
  ],
  exports:[]
})
export class TeamsModule { }
