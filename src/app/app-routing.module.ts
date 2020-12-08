import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
 {path:'authentication', component:LogInComponent},
 {path: 'dashboard', component : DashboardComponent },
 { path: 'player-conference', loadChildren: () => import('./modules/player-conference/player-conference.module').then(m => m.PlayerConferenceModule) },
 { path: 'teams', loadChildren: () => import('./modules/teams/teams.module').then(m => m.TeamsModule) },
 { path: '',   redirectTo: '/authentication', pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*amardeep */
