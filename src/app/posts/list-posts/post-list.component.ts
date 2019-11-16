import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post-service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
    selector:'app-post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})

export class PostListComponent{
    postsReceived:Post[]=[];
    constructor(private _postService:PostService,private _auth:AuthService){
            
    }
    // Authorised User
    authorisedUser:string;
    spinner:boolean=true;
    subsciption:Subscription;
    userStatusSubsciption:Subscription;

    // User authentication Variable 
    userAuth:boolean=false;
    ngOnInit(){
        this.authorisedUser= this._auth.getAuthorisesUserId();
        
        this._postService.getData();
        this.subsciption=this._postService.customEvent.subscribe(data=>{this.postsReceived=data
        this.spinner=false;
        });

         this._postService.getData();
         // Getting the status of user whether is authenticated or not 
         this.userStatusSubsciption=this._auth.getTokenStatus().subscribe((userAuthenticated)=>{
             this.userAuth=userAuthenticated;
             this.authorisedUser=this._auth.getAuthorisesUserId()
         });
         this.userAuth=this._auth.getUserStatus();
    }

    onDelete(id){
        this._postService.deletePost(id);
    }
    ngOnDestroy(){
        this.subsciption.unsubscribe();
        this.userStatusSubsciption.unsubscribe();
    }
}