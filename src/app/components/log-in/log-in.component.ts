import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  error : string;
  errorlogin : boolean = false;

  constructor(private route : Router, private api_service : ClientDataService) { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {

   if(!this.form.valid){
      this.errorlogin = true;
    }else{
      this.api_service.isAuthenticated(this.form.value).subscribe((obj : any) => {
          sessionStorage.setItem("token_key",obj.jwtToken);
          this.errorlogin = false;
          this.route.navigate(['dashboard']);
      }, (error : any) => {
          this.error = error && error.error;
          this.errorlogin = true;
      });
    }
  }
}
