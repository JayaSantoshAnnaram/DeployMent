import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class PostService {

    post: Post[] = [];

    constructor(private _http: HttpClient,private router:Router) {

    }
    currentPage:number=1;
    pageSize:number=1;
    
    // Getting the Data 
    getData() {
        // Code for creating the Query Parameters
        const queryParams=`?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
        this._http.get<{ message: string, posts: any,postCount:number }>(`api/post`+queryParams)
            .pipe(map((postData) => {
                return {Post:postData.posts.map((postcontent) => {     
                    return {
                        id: postcontent._id,
                        content: postcontent.content,
                        title: postcontent.title,
                        creator:postcontent.creator,
                        image:postcontent.image
                    }
                }),PostCount:postData.postCount}
            }))
            .subscribe((post) => {
                this.customEvent.emit(post.Post);
                this.postCount.emit(post.PostCount);
            }
            )
    };


    // Custom even which emits the post on create
    postCount=new EventEmitter<number>();
    customEvent = new EventEmitter<Post[]>();
    customEventSingle = new EventEmitter<Post>();

    createPost(post: Post) {
        const postData=new FormData();
        postData.append('_id',post.id);
        postData.append('title',post.title);
        postData.append('content',post.content);
        postData.append('creator',post.creator);
        postData.append('img',post.image,post.title);
        this._http.post<{ id: string, title: string, content: string,image:string }>
        (`api/post`,postData)
            .subscribe((data) => {
                this.getData();
                this.router.navigate(['/']);
            })

    }

    //Deleting Post
    deletePost(id) {
        this._http.delete(`api/post/${id}`)
            .subscribe(() => this.getData())
    }


    //getting the post by id for editing
     getPost(id){
       return this._http.get<{ message: string, data: any }>(`api/post/${id}`);
       
    }
    //Updating the post 
    updatePost(id:string,title:string,content:string,image:string|File){
        if(typeof(image)==='object'){
            const formData=new FormData();
            formData.append('_id',id);
            formData.append('title',title);
            formData.append('content',content);
            formData.append('img',image);

            this._http.patch(`api/post/${id}`,formData)
            .subscribe(()=>{
                this.router.navigate(['/']);
            },
            err=>console.error(err));
        }
        else{
            this._http.patch(`api/post/${id}`,
            { _id: id, title:title, content:content,img:image},
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }).subscribe(()=>{
                    this.router.navigate(['/']);
                });
        }
        
  
        }


}


