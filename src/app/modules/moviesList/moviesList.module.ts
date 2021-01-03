import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MoviesListRoutingModule } from './moviesList-routing.module';
import { MoviesListDetailsComponent } from './moviesList-details/moviesList-details.component';
import { DialogOverviewExampleDialog, MoviesListTeamComponent } from './moviesList/moviesList.component';
import { DemoMaterialModule } from '../material-module/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeOneComponent } from 'src/app/components/themes/theme-one/theme-one.component';
import { ThemeTwoComponent } from 'src/app/components/themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from 'src/app/components/themes/theme-three/theme-three.component';


@NgModule({
  declarations: [
    MoviesListDetailsComponent, 
    ThemeOneComponent,
    ThemeTwoComponent,
    ThemeThreeComponent,
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
