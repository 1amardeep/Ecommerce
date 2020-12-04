import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { data } from 'src/app/models/data';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  NAMES : string [];
  COLORS : string [];
  dataSource: MatTableDataSource<data>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private clientDataServie : ClientDataService) {

  }

  ngOnInit() {


    this.clientDataServie.getTableData().subscribe((obj : any) =>{

      const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1, obj.NAMES , obj.COLORS ));
      this.dataSource = new MatTableDataSource(users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number, NAMES, COLORS): data {

  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


