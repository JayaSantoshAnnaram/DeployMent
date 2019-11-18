import { Component,EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ImageAlertComponent } from './image-alert-component';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(private _postService:PostService,
    private router:Router,
    private activateRoute:ActivatedRoute,
    private imageDialog:MatDialog){
    
  }
  // title='';
  // content='';
  private id:string;
  private mode:string;
  post:Post;
  spinner=false
  form:FormGroup;
  ngOnInit(){
      // Creating Reactive Forms Approach
      this.form=new FormGroup({
        'title':new FormControl(null,{validators:[Validators.required]}),
        'content':new FormControl((null),{validators:[Validators.required]}),
        'image':new FormControl(null,{validators:[Validators.required]})
      })

      this.activateRoute.paramMap.subscribe((paramMap:ParamMap)=>{
        if(paramMap.has('id')){
          this.id=paramMap.get('id');
          this.mode='Edit';
          this.spinner=true;
          this._postService.getPost(this.id).subscribe(data=>{
            this.spinner=false;
            this.post={content:data.data.content,title:data.data.title,id:data.data._id,creator:null,image:data.data.image}
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
  onSavePosts(){
    if(this.form.invalid){
      return;
    }
    this.spinner=true;
    //Invokes when we are creating the post
    if(this.mode==='Create'){
      var post:Post={id:null,title:this.form.value.title,content:this.form.value.content,
        creator:null,image:this.form.value.image};
    this._postService.createPost(post);
    //Invokes when we updating the post
    }else{
      var post:Post={id:this.id,title:this.form.value.title,content:this.form.value.content,
        creator:null,image:this.form.value.image};
      this._postService.updatePost(this.id,post)
    }
    
    this.form.reset();
    
  }

  // Variable used for image Preview
  imagePreview:string=null;
  
  // Method used for previewing the image
  saveImage(event:Event){
      
      const file=(event.target as HTMLInputElement).files[0];
      this.form.patchValue({'image':file});
      this.form.get('image').updateValueAndValidity;
      
      
      // Checking the image type if it is jpeg,jpg or png
      const mimeType=this.form.value.image.type as string;
      const imageType=(mimeType.split('/')[0]);
      // Defining the file reader object for reading the file
      if(imageType=='image'){
        const filerReader=new FileReader();
        filerReader.onload=()=>{
          this.imagePreview=filerReader.result as string;
        }
        
        filerReader.readAsDataURL(file)
      }
      else{
          this.imagePreview=null;
          this.imageDialog.open(ImageAlertComponent);
          
      }

  }
 
   
}


