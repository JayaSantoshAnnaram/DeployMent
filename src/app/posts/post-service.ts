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
        this._http.get<{ message: string, data: any }>('http://192.168.100.5:3000/api/post')
            .pipe(map((postData) => {
                return postData.data.map((postElement) => {
                    
                    return {
                        id: postElement._id,
                        content: postElement.content,
                        title: postElement.title,
                        creator:postElement.creator
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
        this._http.post<{ id: string, title: string, content: string }>('http://192.168.100.5:3000/api/post',
            { _id: post.id, title: post.title, content: post.content },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            .subscribe((data) => {
                this.getData();
                this.router.navigate(['/']);
            })

    }

    //Deleting Post
    deletePost(id) {
        this._http.delete(`http://192.168.100.5:3000/api/post/${id}`)
            .subscribe(() => this.getData())
    }


    //getting the post by id for editing
     getPost(id){
       return this._http.get<{ message: string, data: any }>(`http://192.168.100.5:3000/api/post/${id}`);
       
    }
    //Updating the post 
    updatePost(id:string,post:Post){
        this._http.patch(`http://192.168.100.5:3000/api/post/${id}`,
        { _id: post.id, title: post.title, content: post.content,creator:post.creator },
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }).subscribe(()=>{
                this.router.navigate(['/']);
            });  
        }


}


