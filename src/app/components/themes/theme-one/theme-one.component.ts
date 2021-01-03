import { Component, OnInit } from '@angular/core';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  selector: 'app-theme-one',
  templateUrl: './theme-one.component.html',
  styleUrls: ['./theme-one.component.scss']
})
export class ThemeOneComponent implements OnInit {

  constructor(private backCheck : BackButtonService) { }

  ngOnInit() {
    this.backCheck.backCheck(true);
  }

}
