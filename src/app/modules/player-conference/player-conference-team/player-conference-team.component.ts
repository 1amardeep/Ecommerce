import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'src/app/models/data';
import { BackButtonService } from 'src/app/services/back-button.service';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './player-conference-team.component.html',
  styleUrls: ['./player-conference-team.component.scss']
})

export class PlayerConferenceTeamComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  NAMES : string [];
  COLORS : string [];
  dataSource: MatTableDataSource<data>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private clientDataServie : ClientDataService,
             private router : Router,
             private route: ActivatedRoute, 
             private backCheck : BackButtonService
    ) {

  }

  ngOnInit() {

    this.backCheck.backCheck(true);

    this.clientDataServie.getTableData().subscribe((obj : any) =>{

      const users =obj.TEAM;
      this.dataSource = new MatTableDataSource(users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  conferenceDetails(id){
    this.router.navigate(['/player-conference/players-conference-details/', id], {relativeTo: this.route} );  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

