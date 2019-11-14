import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor{
    
    constructor(private authSerive:AuthService){

    }
    intercept(req: HttpRequest<any>, next:HttpHandler){
        const token=this.authSerive.getToken();
        const newRequest=req.clone({setHeaders:{'authorization':'jalasa '+token}});

        return next.handle(newRequest);



        
    }

}