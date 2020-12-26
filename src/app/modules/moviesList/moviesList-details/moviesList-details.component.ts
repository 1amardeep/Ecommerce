import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientDataService } from 'src/app/services/client-data.service';
import { BackButtonService } from 'src/app/services/back-button.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './moviesList-details.component.html',
  styleUrls: ['./moviesList-details.component.scss']
})
export class MoviesListDetailsComponent implements OnInit {
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

  
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    tags: new FormControl(''),
    isPublished: new FormControl({ value : '', disabled : true}),
    star: new FormControl('')
  });

  getDetails(){
     this.id = this.route.snapshot.paramMap.get('id');
    this.clientDataServie.editMovie(this.id).subscribe((obj : any) =>{
      obj.tags = obj.tags.toString();
      this.form = new FormGroup({
        name: new FormControl(obj.name,  Validators.required),
        author: new FormControl(obj.author,  Validators.required),
        tags: new FormControl(obj.tags ,  Validators.required),
        isPublished: new FormControl(obj.isPublished,  Validators.required),
        star: new FormControl(obj.star,  Validators.required)
      });
    })
  }


  editPlayer() {
    this.router.navigate(['moviesList-edit'], {relativeTo: this.route} );   // { queryParams: { selectedTeam: this.selectedTeam.name } });
  }

  saveMovie() {
    let data = this.formatMovieData(this.form.value);
    this.clientDataServie.updateMovie(this.id, data).subscribe((obj)=>{
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
