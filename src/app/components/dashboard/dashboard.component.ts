import { Component } from '@angular/core';
import { BackButtonService } from 'src/app/services/back-button.service';

@Component({
   selector: 'app-dashboard',
   templateUrl : './dashboard.component.html',
   styleUrls : ['./dashboard.component.scss']
})

export class DashboardComponent{

   constructor(private backCheck : BackButtonService){

   }
    ngOnInit(): void {
      this.backCheck.backCheck(false);
    }
}