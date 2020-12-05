import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';


const routes: Routes = [
 { path: "dashboard", component : DashboardComponent},
 { path: "playersDetails/:id",
   children : [{
     path : "",
     component : PlayerDetailsComponent},
     {
       path: "edit-player",
       component : EditPlayerComponent
     }
   ]
  },
 //,
 { path: 'players', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) },
 { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*amardeep */
