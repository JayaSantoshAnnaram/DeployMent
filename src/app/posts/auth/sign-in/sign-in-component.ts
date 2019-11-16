import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';


@Component({
    templateUrl:'./sign-in.template.html',
    styleUrls:['./sign-in.component.css']
})
export class SignInComponent implements OnInit,OnDestroy {
    constructor(private userService:AuthService){

    }

    // Property for spinning
    spinner:boolean=false;
    spinnersubscription:Subscription;
    ngOnInit(){
        this.spinnersubscription=this.userService.getTokenStatus().subscribe(data=>this.spinner=data)
    }
    ngOnDestroy(){
        this.spinnersubscription.unsubscribe();
    }
    


    login(form:NgForm){
        if(form.invalid){
            return;
        }
        this.userService.login(form.value.email,form.value.password);
        form.resetForm();
    }
    
}