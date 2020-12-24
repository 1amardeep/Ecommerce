import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesGraphComponent } from './moviesGraph.component';

const routes: Routes = [{ path: '', component: MoviesGraphComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesGraphRoutingModule { }
