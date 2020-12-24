import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BackButtonService } from './services/back-button.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Movies Book !!!';
  hideButton = false;
  showLogout = false;

  constructor( private location: Location,
    private backButton : BackButtonService,
    private router : Router
    ){
      
    }

    ngOnInit(): void {
    
      this.backButton.getStatus().subscribe((decider : boolean)=>{
        setTimeout(() => {
          this.hideButton =  decider;
          if(sessionStorage.getItem('token_key')){
            this.showLogout = true;
           }
        });     
       })
    }

  goBack(): void {
    this.location.back();
  }

  logOut(): void{
    sessionStorage.clear();
    this.router.navigate(['/authentication']); 
    this.showLogout = false; 
    this.hideButton =  false;
  }

}
