import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerConferenceRoutingModule } from './player-conference-routing.module';
import { PlayerConferenceComponent } from './player-conference.component';
import { PlayerConferenceDetailsComponent } from './player-conference-details/player-conference-details.component';
import { PlayerConferenceCorrectionComponent } from './player-conference-correction/player-conference-correction.component';
import { DemoMaterialModule } from 'src/app/material-module';
import { PlayerConferenceTeamComponent } from './player-conference-team/player-conference-team.component';


@NgModule({
  declarations: [PlayerConferenceComponent ,
     PlayerConferenceDetailsComponent, 
     PlayerConferenceCorrectionComponent,
     PlayerConferenceTeamComponent],
  imports: [
    CommonModule,
    PlayerConferenceRoutingModule,
    DemoMaterialModule
  ]
})
export class PlayerConferenceModule { }
