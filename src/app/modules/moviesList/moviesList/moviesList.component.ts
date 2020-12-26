import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'src/app/models/data';
import { BackButtonService } from 'src/app/services/back-button.service';
import { ClientDataService } from 'src/app/services/client-data.service';

export interface Imovie{
    name : String,
    author : String,
   tags : Array<String>,
   isPublished : boolean,
   star  : number
}

@Component({
  selector: 'app-table',
  templateUrl: './moviesList.component.html',
  styleUrls: ['./moviesList.component.scss']
})

export class MoviesListTeamComponent implements OnInit {
  displayedColumns: string[] = ['author', 'name', 'rating','delete'];
  NAMES : string [];
  COLORS : string [];
  ratingArr = [];
  name: string = 'Movies';
  color : string = 'accent'
  starCount : number = 5;
  dataSource: MatTableDataSource<data>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private clientDataServie : ClientDataService,
             private router: Router,
             private route: ActivatedRoute, 
             private backCheck : BackButtonService,
             public dialog: MatDialog
    ) {

  }

  ngOnInit() {

    
    this.backCheck.backCheck(true);

    this.clientDataServie.getTableData().subscribe((obj : any) =>{

      const users =obj || {};
      obj.map((a)=>{
        a.ratingArr = [];
        for (let index = 0; index < this.starCount; index++) {
          a.ratingArr.push(index);
        } 
        return a; 
      });
     
      this.dataSource = new MatTableDataSource(users);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

  
  showIcon(rating: number, index : number) {
   if (rating >= index + 1) {
      return "star";
   } else {
     return "star_border";
   }
  } 

  conferenceDetails(id){
    this.router.navigate(['/moviesList/moviesList-details/', id], {relativeTo: this.route} );  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteMovie(id : string){
       this.clientDataServie.deleteMovie(id).subscribe(()=>{
        this.dataSource.data = 
         this.dataSource.data.filter(obj => obj['_id'] !== id );
       }, (err) =>{
         console.log(err);
       })
  }

  addMovie(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'movie-data-popup.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private clientDataServie : ClientDataService,
    @Inject(MAT_DIALOG_DATA) public data: Imovie) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(data) : void{
   let movieObj : Imovie  = this.formatMovieData(data);
   this.clientDataServie.addMovies(movieObj).subscribe((obj) =>{
      console.log(obj);
   }, (err) =>{
     console.log(err);
   })
  }

  formatMovieData(data) : Imovie{
    let formatedMovie : Imovie;
    formatedMovie = {
      name : data.name,
      author : data.author,
     tags : data.tags.split(","),
     isPublished : data.isPublished.toLowerCase() === 'yes' ? true : false,
     star  : data.star
    }
     return formatedMovie 
  }

}
