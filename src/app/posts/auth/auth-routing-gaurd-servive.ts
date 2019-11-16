import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthRoutingGuardService implements CanActivate {
    
    constructor(private authService:AuthService,private router:Router){

    }

    //Can Active method
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
        let userStatus=this.authService.getUserStatus()
        if(!userStatus){
                this.router.navigate(['/sign-in'])
        }
        return true;
    }

}