import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../Models/IPost';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOption
  constructor(private http:HttpClient)
   { 
    this.httpOption={
      headers:new HttpHeaders
      (
        {
          'Content-Type':'appliccation/json'
          // ,authorization:'token'
        }
      )
    }
   }
   allPosts():Observable<IPost[]>
   {
      return this.http.get<IPost[]>('http://localhost:3000/posts')
      .pipe(
        retry(3),
        catchError ((err) =>
        {
          console.log(err);
         return throwError (()=>new Error ("No Data"))
        })
      )
   }
   add(post:IPost)
   {
    return this.http.post<IPost>('http://localhost:3000/posts',post,this.httpOption)
    .pipe(
      retry(3),
      catchError ((err) =>
      {
        console.log(err);
       return throwError (()=>new Error ("No Data"))
      })
    )
   }
   update(id:string,post:IPost)
   {
    // :id

   }
   getById(id:string)
   {
    return this.http.post<IPost>(`http://localhost:3000/posts/${id}`,this.httpOption)
    
   }
   delete(id:string)
   {

   }
}
