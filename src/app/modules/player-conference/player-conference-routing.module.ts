import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/services/authentication.guard';
import { PlayerConferenceCorrectionComponent } from './player-conference-correction/player-conference-correction.component';
import { PlayerConferenceDetailsComponent } from './player-conference-details/player-conference-details.component';
import { PlayerConferenceTeamComponent } from './player-conference-team/player-conference-team.component';


const routes: Routes = [
         { path: '', 
         component: PlayerConferenceTeamComponent ,
         canActivate : [AuthenticationGuard]
          },
         { path: "players-conference-details/:id",
              children : [
                { path : "", component : PlayerConferenceDetailsComponent },
                { path: "player-conference-edit", component : PlayerConferenceCorrectionComponent }
            ]
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerConferenceRoutingModule { }
