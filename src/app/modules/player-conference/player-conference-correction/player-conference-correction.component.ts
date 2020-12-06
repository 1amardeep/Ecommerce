import { Component, OnInit } from '@angular/core';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './player-conference-correction.component.html',
  styleUrls: ['./player-conference-correction.component.scss']
})
export class PlayerConferenceCorrectionComponent implements OnInit {

  constructor(
    private backCheck : BackButtonService
  ) { }

  ngOnInit() {
    this.backCheck.backCheck(true);
  }

}
