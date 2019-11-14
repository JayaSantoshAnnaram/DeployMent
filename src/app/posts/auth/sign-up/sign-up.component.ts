import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { UserModule } from '../../user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _authservice:AuthService,private router:Router) { }
  userStatus:boolean=false;

  subscription:Subscription
  ngOnInit() {
    this.subscription=this._authservice.getTokenStatus().subscribe(data=>this.userStatus=data);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  login(form:NgForm){
      if(form.invalid){
        return;
      }
    this._authservice.createUser(form.value.email,form.value.password);
    form.resetForm();
  }
}

