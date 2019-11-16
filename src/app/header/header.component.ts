import { Component, OnInit } from '@angular/core';
import { AuthService } from '../posts/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{
    isUserAutenticated:boolean=false;
    constructor(private authService:AuthService){

    }
    subscription:Subscription;
    ngOnInit(){
        this.isUserAutenticated=this.authService.getUserStatus();
      this.subscription=  this.authService.getTokenStatus().subscribe((data)=>{
            this.isUserAutenticated=data;
        })
    }

    // Implementing SignOut Functionality
    signOut(){
        this.authService.signOut();
    }

    ngOnDestroy(){
            this.subscription.unsubscribe();
    }

}