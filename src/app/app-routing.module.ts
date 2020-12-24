import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
 {path:'authentication', component:LogInComponent},
 {path: 'dashboard', component : DashboardComponent },
 { path: 'moviesList', loadChildren: () => import('./modules/moviesList/moviesList.module').then(m => m.MoviesListModule) },
 { path: 'moviesGraph', loadChildren: () => import('./modules/moviesGraph/moviesGraph.module').then(m => m.MoviesGraphModule) },
 { path: '',   redirectTo: '/authentication', pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*amardeep */
