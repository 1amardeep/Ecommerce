import { Component, OnInit } from '@angular/core';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  selector: 'app-theme-three',
  templateUrl: './theme-three.component.html',
  styleUrls: ['./theme-three.component.scss']
})
export class ThemeThreeComponent implements OnInit {

  constructor(private backCheck : BackButtonService) { }

  ngOnInit() {
    this.backCheck.backCheck(true);
  }

}
