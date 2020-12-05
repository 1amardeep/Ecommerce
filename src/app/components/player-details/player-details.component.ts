import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  selectedTeam : {};

  constructor(   private route: ActivatedRoute, 
    private location: Location,
    private clientDataServie : ClientDataService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.clientDataServie.getTableData().subscribe((obj : any) =>{
    const users =obj.TEAM;
     this.selectedTeam = users.filter(obj => obj.id == id)[0];
    })
  }

  goBack(): void {
    this.location.back();
  }

}
