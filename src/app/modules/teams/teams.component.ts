import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent {

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla', 'Aishwarya'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20, 26]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private backCheck : BackButtonService){

  }

  ngOnInit(): void {
    this.backCheck.backCheck(true);
  }

}