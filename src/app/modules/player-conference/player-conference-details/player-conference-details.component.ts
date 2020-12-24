import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientDataService } from 'src/app/services/client-data.service';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  templateUrl: './player-conference-details.component.html',
  styleUrls: ['./player-conference-details.component.scss']
})
export class PlayerConferenceDetailsComponent implements OnInit {
  selectedTeam ;
  id;
  constructor(   private route: ActivatedRoute, 
    private location: Location,
    private router : Router,
    private backCheck : BackButtonService,
    private clientDataServie : ClientDataService) { }

  ngOnInit() {
    this.getDetails();
    this.backCheck.backCheck(true);
  }

  getDetails(){
     this.id = this.route.snapshot.paramMap.get('id');
    this.clientDataServie.editMovie(this.id).subscribe((obj : any) =>{
      obj.tags = obj.tags.toString();
     this.selectedTeam = obj;
    })
  }

  getImage(){
    if(this.selectedTeam){
     //   return 'url('+this.selectedTeam.url+')'
    }
  }

  editPlayer() {
    this.router.navigate(['player-conference-edit'], {relativeTo: this.route} );   // { queryParams: { selectedTeam: this.selectedTeam.name } });
  }

  saveMovie() {
    this.selectedTeam = this.formatMovieData(this.selectedTeam);
    this.clientDataServie.updateMovie(this.id,this.selectedTeam).subscribe((obj)=>{
        this.location.back();
    },(err) =>{
        console.log(err);
    })
  }

  formatMovieData(data) : any{
    let formatedMovie : any;
    formatedMovie = {
      name : data.name,
      author : data.author,
     tags : data.tags.split(","),
     isPublished : data.isPublished,
     star  : data.star
    }
     return formatedMovie 
  }

}
