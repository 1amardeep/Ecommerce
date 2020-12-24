import { Component, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label, BaseChartDirective } from 'ng2-charts';
import { BackButtonService } from 'src/app/services/back-button.service';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './moviesGraph.component.html',
  styleUrls: ['./moviesGraph.component.scss']
})


export class MoviesGraphComponent {

  @ViewChild(BaseChartDirective, {
     static: false
}) chart: BaseChartDirective;
  
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet =[]
  colorsList: any = [];

  doughnutChartType: ChartType = 'doughnut';

  constructor(private backCheck : BackButtonService,
    private clientDataServie : ClientDataService){

  }

  ngOnInit(): void {
    this.backCheck.backCheck(true);
    this.clientDataServie.getTableData().subscribe((obj : any) =>{
      obj.map((obj)=>{
        obj.color = ['red','blue', 'green', 'orange', 'yellow'][obj.star - 1];
        return obj;
      });
      const users =obj;
      this.doughnutChartLabels = users.map(obj => obj.name);
      this.doughnutChartData= [
        users.map(obj => obj.star)
      ];
      this.colorsList = [
        {
          borderColor: 'black',
          backgroundColor: users.map(obj => obj.color)
        }
      ];
    })
  }

  public chartOptions: ChartOptions = {
    legend: { 
      onClick: (e, i) => {
        console.log(this.chart.data[0][i.index]);
      }
    }
  }

}