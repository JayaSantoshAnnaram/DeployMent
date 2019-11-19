import { Injectable, EventEmitter } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class PostService {

    post: Post[] = [];

    constructor(private _http: HttpClient,private router:Router) {

    }
    // Getting the Data 
    getData() {
        this._http.get<{ message: string, data: any }>(`http://localhost:3000/api/post`)
            .pipe(map((postData) => {
                return postData.data.map((postElement) => {
                    
                    return {
                        id: postElement._id,
                        content: postElement.content,
                        title: postElement.title,
                        creator:postElement.creator,
                        image:postElement.image
                    }
                })
            }))
            .subscribe((dataM) => {
                this.customEvent.emit(dataM);
            }
            )
    };


    // Custom even which emits the post on create
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
        (`http://localhost:3000/api/post`,postData)
            .subscribe((data) => {
                this.getData();
                this.router.navigate(['/']);
            })

    }

    //Deleting Post
    deletePost(id) {
        this._http.delete(`http://localhost:3000/api/post/${id}`)
            .subscribe(() => this.getData())
    }


    //getting the post by id for editing
     getPost(id){
       return this._http.get<{ message: string, data: any }>(`http://localhost:3000/api/post/${id}`);
       
    }
    //Updating the post 
    updatePost(id:string,title:string,content:string,image:string|File){
        if(typeof(image)==='object'){
            const formData=new FormData();
            formData.append('_id',id);
            formData.append('title',title);
            formData.append('content',content);
            formData.append('img',image);

            this._http.patch(`http://localhost:3000/api/post/${id}`,formData)
            .subscribe(()=>{
                this.router.navigate(['/']);
            },
            err=>console.error(err));
        }
        else{
            this._http.patch(`http://localhost:3000/api/post/${id}`,
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


