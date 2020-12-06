import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerConferenceRoutingModule } from './player-conference-routing.module';
import { PlayerConferenceComponent } from './player-conference.component';
import { PlayerConferenceDetailsComponent } from './player-conference-details/player-conference-details.component';
import { PlayerConferenceCorrectionComponent } from './player-conference-correction/player-conference-correction.component';
import { PlayerConferenceTeamComponent } from './player-conference-team/player-conference-team.component';
import { DemoMaterialModule } from '../material-module/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlayerConferenceComponent ,
     PlayerConferenceDetailsComponent, 
     PlayerConferenceCorrectionComponent,
     PlayerConferenceTeamComponent],
  imports: [
    CommonModule,
    PlayerConferenceRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ]
})
export class PlayerConferenceModule { }
