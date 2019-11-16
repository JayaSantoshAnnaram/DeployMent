import { Component,EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post-service';
import { format } from 'util';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(private _postService:PostService,private router:Router,private activateRoute:ActivatedRoute ){
    
  }
  title='';
  content='';
  private id:string;
  private mode:string;
  post:Post;
  spinner=false
  ngOnInit(){
      this.activateRoute.paramMap.subscribe((paramMap:ParamMap)=>{
        if(paramMap.has('id')){
          this.id=paramMap.get('id');
          this.mode='Edit';
          this.spinner=true;
          this._postService.getPost(this.id).subscribe(data=>{
            this.spinner=false;
            this.post={content:data.data.content,title:data.data.title,id:data.data._id,creator:null}
          });
          // this._postService.getPost(this.id).subscribe((post)=>{
          //   this.post.title=post.data.title;
          //   this.post.content=post.data.content;
          // });
          // console.log(this.post);
        }else{
          this.mode='Create';
          this.id=null;
        }
      })     
  } 

  
  // Creating Post
  onSavePosts(form:NgForm){
    if(form.invalid){
      return;
    }
    this.spinner=true;
    //Invokes when we are creating the post
    if(this.mode==='Create'){
      var post:Post={id:null,title:form.value.title,content:form.value.content,creator:null};
    this._postService.createPost(post);
    //Invokes when we updating the post
    }else{
      var post:Post={id:this.id,title:form.value.title,content:form.value.content,creator:null};
      this._postService.updatePost(this.id,post)
    }
    
    form.resetForm();
    
  }
 
 
   
}


