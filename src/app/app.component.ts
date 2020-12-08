import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BackButtonService } from './services/back-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cricket Book !!!';
  hideButton = false;

  constructor( private location: Location,
    private backButton : BackButtonService
    ){
      
    }

    ngOnInit(): void {
      this.backButton.getStatus().subscribe((decider : boolean)=>{
        setTimeout(() => {
          this.hideButton =  decider;
        });     
       })
    }

  goBack(): void {
    this.location.back();
  }

}
