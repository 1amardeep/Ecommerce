import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BackButtonService } from './services/back-button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cricket .... !!!!';
  hideButton = false;

  constructor( private location: Location,
    private backButton : BackButtonService
    ){
       this.backButton.getStatus().subscribe((decider : boolean)=>{
        this.hideButton =  decider;
       })
    }

    ngOnInit(): void {
      
    }

  goBack(): void {
    this.location.back();
  }

}
