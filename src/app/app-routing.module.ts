import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';


const routes: Routes = [
 { path: "dashboard", component : DashboardComponent},
 { path: "playersDetails/:id", component : PlayerDetailsComponent},
 { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*amardeep */
