import { Component, OnInit } from '@angular/core';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  constructor(
    private backCheck : BackButtonService
  ) { }

  ngOnInit() {
    this.backCheck.backCheck(true);
  }

}
