import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  error : string = 'Username or password invalid';
  errorlogin : boolean = false;

  constructor(private route : Router) { }

  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    this.errorlogin = true;
    if (this.form.valid) {
      this.errorlogin = false;
      this.route.navigate(['dashboard']);
    }
  }

}
