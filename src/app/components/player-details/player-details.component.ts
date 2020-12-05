import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClientDataService } from 'src/app/services/client-data.service';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  selectedTeam ;

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
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientDataServie.getTableData().subscribe((obj : any) =>{
     this.selectedTeam = obj.TEAM.filter(obj => obj.id == id)[0];
    })
  }

  getImage(){
    if(this.selectedTeam){
      return 'url('+this.selectedTeam.url+')'
    }
  }

  editPlayer() {
    this.router.navigate(['/edit-player'], { queryParams: { selectedTeam: this.selectedTeam.name } });
  }

}
