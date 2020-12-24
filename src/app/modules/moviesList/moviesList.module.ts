import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesListRoutingModule } from './moviesList-routing.module';
import { MoviesListDetailsComponent } from './moviesList-details/moviesList-details.component';
import { DialogOverviewExampleDialog, MoviesListTeamComponent } from './moviesList/moviesList.component';
import { DemoMaterialModule } from '../material-module/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MoviesListDetailsComponent, 
    MoviesListTeamComponent,
     DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
})
export class MoviesListModule { }
