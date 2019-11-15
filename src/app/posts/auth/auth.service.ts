import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserModule } from '../user.model';
import { retry, catchError } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';
import { Subject, throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AlertComponent } from 'src/app/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user:UserModule
  constructor(private _http:HttpClient,private dialog:MatDialog,private router:Router) {

   }

   createUser(email:string,password:string){
     this._http.post('http://localhost:4200/api/user/sign-up',{
        'email':email,
        'password':password
      })
      .subscribe(()=>{
      alert('Account Created Successfully please Sigin into the portal for further Creating the Posts');
      this.router.navigate(['/sign-in'])},
      (err)=>this.handleError(err));     
   }
   
   handleError(err:HttpErrorResponse){
    // console.log(err);
    this.dialog.open(AlertComponent,{data:{data:err.error.Message}});
   }

   token:string;
   Autotimer:any;
   AuthoriseduserId:string;
   // Login User 
   login(email:string,password:string){
     this._http.post<{token:string,timer:number,userId:string}>(`http://localhost:4200/api/user/sign-in`,{
       'email':email,
       'password':password
     }).pipe(catchError((err)=>{
            
        return throwError(this.handleError(err));
            
     })).subscribe(data=>{
          // Storing Authorised user ID
          this.AuthoriseduserId=data.userId;
 
          const tokenRecived=data.token;
          this.token=tokenRecived;
          // Checking whether token is present or not for verifying user authentication
          if(this.token){
            // Function of Auto locked outfunctionality
            const timer=data.timer;
            this.timer(timer);
            this.isUserAunticated=true;
            this.tokentStatus.next(true);
            
            // Code for storing autheication data to local storage
            const dateNow=new Date();
            const expirationDate=new Date(dateNow.getTime()+data.timer*1000);
          this.saveAuthData(this.token,expirationDate,this.AuthoriseduserId);
          this.router.navigate(['/'])
          }

     },(err)=>{
      //  alert(err.error.message);
       this.tokentStatus.next(false);
       console.log(err)
      });
     
   }

   // Code refracted for timing 
   timer(timer){
    this.Autotimer= setTimeout(()=>{
      this.signOut();
    },timer*1000)
   }

   //Get Token Method
   getToken(){
     return this.token;
   }

   // Tokent status
   private tokentStatus=new Subject<boolean>();
   getTokenStatus(){
      return this.tokentStatus.asObservable();
   }

   isUserAunticated:boolean=false;
   // user Authentication Status
   getUserStatus(){
    return this.isUserAunticated;
   }

   //SignOut Functionality which will set token to null and set user authenticted properties to false
   signOut(){
     this.token=null;
     this.isUserAunticated=false;
     this.tokentStatus.next(false);
     clearTimeout(this.Autotimer);
     this.clearAuthData();
     this.AuthoriseduserId=null;
     this.router.navigate(['/'])
   }

   // Saving authentication data
   private saveAuthData(token:string,expirationDate:Date,AuthoriseduserId:string){
      localStorage.setItem('token',token);
      localStorage.setItem('AuthoriseduserId',AuthoriseduserId);
      localStorage.setItem('expirationDate',expirationDate.toISOString());
   }
   //Removing hte Authetication Data
   private clearAuthData(){
     localStorage.removeItem('token');
     localStorage.removeItem('AuthoriseduserId')
     localStorage.removeItem('expirationDate');
   }

   // Code for Autostart of app i.e refereshing the web application doesn't start the app
   autoAuthUser(){
      const localStorageData= this.getLocalAuthData();
      if(!localStorageData){
        return;
      }
      const currentDae=new Date();
      const futureDate=localStorageData.expirationDate;

      const expirationDate=futureDate.getTime()-currentDae.getTime();

      if(expirationDate>0){
          
          this.token=localStorageData.token;
          this.AuthoriseduserId=localStorageData.AuthoriseduserId;
          this.tokentStatus.next(true);
          this.isUserAunticated=true;
          this.timer(expirationDate/1000);
      }
   }
   
   // Getting local storage auth data
   private getLocalAuthData(){
      const token=localStorage.getItem('token');
      const expirationDate=localStorage.getItem('expirationDate');
      const AuthoriseduserId=localStorage.getItem('AuthoriseduserId');
      if(!token || !expirationDate){
        return;
      }
      return{
        'token':token,
        'expirationDate':new Date(expirationDate),
        'AuthoriseduserId':AuthoriseduserId
      }
   }
   // Getting Auhtorised Used ID
   getAuthorisesUserId(){
     return this.AuthoriseduserId;
   }
}

