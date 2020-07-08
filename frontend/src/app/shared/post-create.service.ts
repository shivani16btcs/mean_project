import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from "../post.model";

@Injectable({
  providedIn: 'root'
})
export class PostCreateService {

  constructor(private http:HttpClient){}
  private url='http://localhost:1234/upload';
  private posts: Post[] = [];


  // postCreated(bodydata){
  //   return this.http.post(`${this.url}`,bodydata)
  // }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("image", image, title);
    this.http
      .post<{ message: string; post: Post }>(`${this.url}`,postData)
      .subscribe(responseData => {
        //console.log("hello");
        const post: Post = {
          //id: responseData.post.id,
          title: title,
          content: content,
          image: responseData.post.image
        };
        this.posts.push(post);
       // this.postsUpdated.next([...this.posts]);
        //this.router.navigate(["/"]);
      },error=>{
        console.log(error+" "+postData); });
  }
  }




