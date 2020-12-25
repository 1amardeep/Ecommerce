import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error : string;
  errorlogin : boolean = false;

  constructor(private route : Router, private api_service : ClientDataService) { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {

    if(!this.form.valid){
       this.errorlogin = true;
     }else{
       this.api_service.registerUser(this.form.value).subscribe((obj : any) => {
         //  sessionStorage.setItem("token_key",obj.jwtToken);
           this.errorlogin = false;
           this.route.navigate(['authentication']);
       }, (error : any) => {
           this.error = error && error.error;
           this.errorlogin = true;
       });
     }
   }

}
